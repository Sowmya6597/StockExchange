import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent} from './user/register/register.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent} from './users/users.component';
import { UserComponent} from './update/user/user.component';
import { LandingComponent } from './admin/landing/landing.component';
import { ImportComponent } from './admin/import/import.component';
import { CompanydetailsComponent } from './admin/companydetails/companydetails.component';
import { UserhomepageComponent } from './user1/userhomepage/userhomepage.component';
import { ComparecompanyComponent } from './user1/comparecompany/comparecompany.component';
import { AddcompanyComponent } from './admin/addcompany/addcompany.component';
import { StockexchangedetailsComponent } from './admin/stockexchangedetails/stockexchangedetails.component';
import { UpdateipoComponent } from './admin/updateipo/updateipo.component';
import { UpdatecompanyComponent } from './admin/updatecompany/updatecompany.component';
import { DeletecompanyComponent } from './admin/deletecompany/deletecompany.component';
import { ComparesectorComponent } from './user1/comparesector/comparesector.component';
import { IpoComponent } from './user1/ipo/ipo.component';


const routes: Routes = [
   {path:'register',component:SignupComponent},
   {path:'login',component:LoginComponent},
   {path:'users',component:UsersComponent},
   {path:'user',component:UserComponent},
   {path:'landing',component:LandingComponent},
   {path:'import',component:ImportComponent},
   {path:'companydetails',component:CompanydetailsComponent},
   {path:'userhomepage',component:UserhomepageComponent},
   {path:'comparecompany',component:ComparecompanyComponent},
   {path:'addCompany',component:AddcompanyComponent},
   {path:'stockexchangedetails',component:StockexchangedetailsComponent},
   {path:'updateipo',component:UpdateipoComponent},
   {path:'updatecompany',component:UpdatecompanyComponent},
   {path:'deletecompany',component:DeletecompanyComponent},
   {path:'comparesector',component:ComparesectorComponent},
   {path:'ipo',component:IpoComponent},
   
   
  
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
