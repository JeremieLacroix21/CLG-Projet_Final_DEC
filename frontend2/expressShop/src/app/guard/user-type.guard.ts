import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UserTypeGuard implements CanActivate {
  constructor(private router: Router, private authenticationService: AuthService, private location: Location) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log("Checking UserType...");
    let canActivate = false;
    let currentUser = this.authenticationService.currUser;
    let allowedTypes = route.data.allowed as Array<string>;

    canActivate = (allowedTypes.findIndex(type => type == currentUser.TypeUser) > -1);
    if (!canActivate) {
      this.router.navigate(['/404']);
    }

    return canActivate;
  }
}
