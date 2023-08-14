import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
@Injectable()
export class authGuard implements CanActivate {

  constructor (
    private router: Router , 
    private as : AuthService , 
    private toastr : ToastrService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree > | boolean | UrlTree {
     
  let ifloggedin = this.as.isLoggedInGuard
    if (ifloggedin) {
      console.log (' Access Granted.. ')
      return true
    }
    else {
      this.router.navigate(['/error'])
      return false 
    }

  }
}
