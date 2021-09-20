import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class loginAuthService {
 
  userData = null;
  currentUser = null;
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
