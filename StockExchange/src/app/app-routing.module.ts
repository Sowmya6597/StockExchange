import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignupComponent} from './user/register/register.component';
import { LoginComponent } from './login/login.component';
import {UsersComponent} from './users/users.component';
import {UserComponent} from './update/user/user.component';
import { LandingComponent } from './admin/landing/landing.component';
import { ImportComponent } from './admin/import/import.component';
import { CompanydetailsComponent } from './admin/companydetails/companydetails.component';
import { UserhomepageComponent } from './user1/userhomepage/userhomepage.component';
import { ComparecompanyComponent } from './user1/comparecompany/comparecompany.component';
// import { ImportDtaComponent } from './import-dta/import-dta.component';
// import { ManagecomapanyComponent } from './managecomapany/managecomapany.component';
// import { ManageexchangeComponent } from './manageexchange/manageexchange.component';
// import { UpdateipodetailsComponent } from './updateipodetails/updateipodetails.component';

const routes: Routes = [
  {path:'register',component:SignupComponent},
   {path:'login',component:LoginComponent},
   {path:'users',component:UsersComponent},
   {path:'user',component:UserComponent},
   {path:'landing',component:LandingComponent},
   {path:'import',component:ImportComponent},
   {path:'companydetails',component:CompanydetailsComponent},
   {path:'userhomepage',component:UserhomepageComponent},
   {path:'comparecompany',component:ComparecompanyComponent}
   //  {path:'import-dta',component:ImportDtaComponent},
//  {path:'managecompany',component:ManagecomapanyComponent},
//  {path:'manageexchange',component:ManageexchangeComponent},
//  {path:'updateipodetails',component:UpdateipodetailsComponent}

  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
