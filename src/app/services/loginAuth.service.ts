import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import { Router } from "@angular/router";

@Injectable()
export class loginAuthService {
  //token: string;
  userData = null;
  // private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  // constructor(private http: HttpClient, private route: Router) {  }

  // get isLoggedIn() {

  //   if (localStorage.getItem('adminData') || localStorage.getItem('userData')) {
  //     this.loggedIn.next(true);
  //   } else {
  //     this.loggedIn.next(false);
  //   }
  //   return this.loggedIn.asObservable();
  // }

  // loginAdmin(signInForm:string): Boolean {
  //   localStorage.setItem('adminData', signInForm);
  //   this.loggedIn.next(true);
  //   return true;
  // }
  // loginUser(signInForm:string): Boolean {
  //   localStorage.setItem('userData', signInForm);
  //   this.loggedIn.next(true);
  //   return true;
  // }

  // logout() {
  //   localStorage.removeItem('adminData');
  //   localStorage.removeItem('userData');
  //   this.loggedIn.next(false);
  //   this.route.navigate(['/login']);
  // }
  currentUser = null;
  // isAdmin=false;
  constructor(private _router: Router) {}
  get isLoggedIn(): boolean {
    return !!this.currentUser;
  }
  get isUserIn(): boolean {
    return !!this.userData;
  }
  login(username: string, password: string) {
    localStorage.setItem("user_name", username);
    if (username === "admin") {
      this.currentUser = {
        uname: "admin",
        isAdmin: true,
      };
      return;
    }
    this.currentUser = {
      uname: username,
      isAdmin: false,
    };
  }
  logout() {
    this.currentUser = null;
    localStorage.removeItem("user_name");
    this._router.navigate(["/"]);
  }


  isUser(username: string) {
    if (username === "user") {
      this.userData = {
        uname: "Admin",
        isUser: false,
      };
      return;
    }
    else{
    this.userData = {
      uname: "User",
      isUser: true,
    };
    return;
  }
}

}
