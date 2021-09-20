
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private _router:Router) { }
  canActivate():boolean {
    var token =localStorage.getItem("user_name");
    if(localStorage.getItem("user_name")!=null && localStorage.getItem("user_name")==='admin')
    {
      return true;
    }
    else{
      this._router.navigate(['/login']);
      alert('login first to access this page')
      return false;
    }
}
}
