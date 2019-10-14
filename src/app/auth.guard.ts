import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,CanLoad, Route } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.authenticationService.login;
        console.log("current user", currentUser);
        if (currentUser) {
            // logged in so return true
            this.router.navigate(['/admin/aboutUs']);
        }

        // not logged in so redirect to login page with the return url
        // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return true;
    }
    canLoad(route: Route): boolean {
    
        let url: string = route.path;
        console.log('Url:'+ url);
        if (url=='admin') {
          alert('You are not authorised to visit this page');
          return false;
        }  
        return true; 
      }
}
// https://www.tektutorialshub.com/angular/angular-canload-guard-example/