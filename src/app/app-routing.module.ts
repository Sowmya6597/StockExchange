import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SignupComponent} from './user/register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'register.component.html',component:SignupComponent},
   {path:'login.component.html',component:LoginComponent}
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
