import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DEBUGGING } from '../models/tDEBUG-VALUES';

import { AuthService } from '../services';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = localStorage.getItem('currentUser');
        console.log(currentUser);
        //COMMENT FOR DEBUG (or see app/models/DEBUG-LOGIN.ts)
        if (currentUser || DEBUGGING) {
            return true;
            console.log("auth true");
        }

        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false; 

        //DEBUG UNCOMMENT TO GAIN ACCESS LOGIN --> HOME
        //return true;
    }
}