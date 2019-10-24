import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { AuthService } from '../services';

@Injectable({
  providedIn: 'root'
})
export class UserTypeGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router, private authenticationService: AuthService) {}

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(childRoute, state);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log("Checking UserType...");
    let canActivate = false;
    let currentUser = this.authenticationService.currUser;
    let allowedTypes = route.data.allowed as Array<string>;

    canActivate = (allowedTypes) ? (allowedTypes.findIndex(type => type == currentUser.TypeUser) > -1) : true;
    if (!canActivate) {
      this.router.navigate(['/404']);
    }

    return canActivate;
  }
}
