import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanDeactivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  constructor( private router: Router) {}

  canActivate(): boolean {
    var isLogin = localStorage.getItem('isLogin');
    if(isLogin != "true"){
      this.router.navigateByUrl('/Login');
      return false;
    }
    return true;

  }

 


  

}