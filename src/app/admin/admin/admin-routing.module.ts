import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from 'src/app/components/notfound/notfound.component';
import { AdminComponent } from './admin.component';


const routes: Routes = [

  { path  : '' , component : AdminComponent},
  { path: '**', component: NotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
