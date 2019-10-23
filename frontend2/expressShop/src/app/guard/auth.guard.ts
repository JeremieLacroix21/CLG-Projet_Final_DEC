import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, UrlSegmentGroup, CanDeactivate, CanActivateChild } from '@angular/router';
import { DEBUGGING } from '../models/DEBUG-LOGIN';

import { AuthService } from '../services';
import { config } from 'src/config';
import { LoginComponent } from '../login/login.component';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, CanActivateChild {
    constructor(private router: Router, private authenticationService: AuthService) {}

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(childRoute, state);
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log("Checking Auth...");
        let canActivate = true;

        if (this.authenticationService.currUser) {
            if (state.url === '/login' || state.url === '/subscribe') {
                console.log("Redirecting to home...");
                this.router.navigate(['/home']);
                canActivate = false;
            }
        } else if (state.url !== '/login' && state.url !== '/subscribe') {
            console.log("Redirecting to login...");
            this.router.navigate(['/login']);
            canActivate = false;
        }

        return canActivate;
    }
}