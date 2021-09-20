import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { loginAuthService } from "src/app/services/loginAuth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  admindata: boolean = false;
  userdata: boolean = false;
  signInForm: FormGroup;
  userId: string = "";
  password: string = "";

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: loginAuthService
  ) {
    this.signInForm = formBuilder.group({
      u_Id: ["", Validators.required],
      pass: ["", Validators.required],
    });
  }

  ngOnInit(): void {
    var admin = localStorage.getItem("admin");
    var user = localStorage.getItem("user");
    if (admin !== null) {
      this.admindata = true;
      this.userdata = false;
    }
    if (user !== null) {
      this.admindata = false;
      this.userdata = true;
    }
  }
  get isUserIn(): boolean {
    return this.authService.isUserIn;
  }

  login(signInForm: any) {
    this.userId = signInForm.controls.u_Id.value;
    this.password = signInForm.controls.pass.value;
    if (this.userId === "user" && this.password === "password") {
      this.authService.login(this.userId, this.password);

      this.router.navigate(["/user"]);
    } else if (this.userId === "admin" && this.password === "password") {
      this.authService.login(this.userId, this.password);
      this.router.navigate(["/admin"]);
    } else {
      alert("Wrong Username and Password");
    }
  }
}
