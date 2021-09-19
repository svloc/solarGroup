import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { NotfoundComponent } from "./components/notfound/notfound.component";
import { LoginComponent } from "./components/login/login.component";
import { AuthService } from "./services/auth.service";
const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  {
    path: "admin",
    canActivate: [AuthService],
    loadChildren: () =>
      import("./admin/admin/admin.module").then((m) => m.AdminModule),
  },
  {
    path: "user",
    loadChildren: () => import("./user/user.module").then((m) => m.UserModule),
  },
  { path: "Home", redirectTo: "/", pathMatch: "full" },
  { path: "**", component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
