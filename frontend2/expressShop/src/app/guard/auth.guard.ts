import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DEBUGGING } from '../models/DEBUG-LOGIN';

import { AuthService } from '../services';
import { config } from 'src/config';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log("canActivate is called");
        let currentUser = this.authenticationService.currUser;

        if (currentUser) {
            //this.router.navigate(['/home'], { queryParams: { returnUrl: state.url } });
            return true;
        } else {
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        }

        return false;
    }
}