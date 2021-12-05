import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth : AuthService, private router : Router){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> | boolean {

        if(this.auth.IsLoggedIn()){
          return true;
        }
    
        this.router.navigate(['login']);
        return false;

      }

  // canActivate() {

  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot)

  //   if(this.auth.IsLoggedIn()){
  //     return true;
  //   }

  //   this.router.navigate(['login']);
  //   return false;
     
  // }
  
}
