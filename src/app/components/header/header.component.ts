import { Component, OnInit, Inject, AfterViewInit } from "@angular/core";
import { Observable } from "rxjs";
import { loginAuthService } from '../../services/loginAuth.service';
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  constructor(private authService: loginAuthService) {}
  login = false;
  logout = false;
  
  ngOnInit() { }
 
    onLogout(){
      this.authService.logout();
      alert("logout successfully");
    }
    get isLoggedIn(): boolean {
      return this.authService.isLoggedIn;
    }
}
