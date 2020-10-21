import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot, UrlTree } from '@angular/router';
import { NovitaService } from './services/novita.service';
 
 
@Injectable()
export class AuthGuardService implements CanActivate {
 
    constructor(private router:Router, private novitaservice:NovitaService) {
 
    }
 
    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): boolean|UrlTree {
 
        if (!this.novitaservice.isUserLoggedIn()) {
            alert('You are not allowed to view this page. You are redirected to login Page');
            
            this.router.navigate(["login"]);
            return false;
 
            //var urlTree = this.router.createUrlTree(['login']);
            //return urlTree;
        } 
 
        return true;
    }
 
}
