import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent} from './user/register/register.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent} from './users/users.component';
import { UserComponent} from './update/user/user.component';
import { LandingComponent } from './admin/landing/landing.component';
import { ImportComponent } from './admin/import/import.component';
import { UserhomepageComponent } from './user1/userhomepage/userhomepage.component';
import { ComparecompanyComponent } from './user1/comparecompany/comparecompany.component';
import { AddcompanyComponent } from './admin/addcompany/addcompany.component';
import { StockexchangedetailsComponent } from './admin/stockexchangedetails/stockexchangedetails.component';
import { UpdatecompanyComponent } from './admin/updatecompany/updatecompany.component';
import { ComparesectorComponent } from './user1/comparesector/comparesector.component';
import { IpoComponent } from './admin/ipo/ipo.component';
import { CompanyComponent } from './admin/company/company.component';
import { HomeComponent } from './home/home.component';
import { ManageIpoComponent } from './admin/manage-ipo/manage-ipo.component';
import { UpdateIpoComponent } from './admin/update-ipo/update-ipo.component';
import { ActivationComponent } from './activation/activation.component';
import { StockexchangeComponent } from './admin/stockexchange/stockexchange.component';
import { UpdatestockexchangeComponent } from './admin/updatestockexchange/updatestockexchange.component';
import { ChartsComponent } from './charts/charts.component';
import { IposListComponent } from './user1/ipos-list/ipos-list.component';
import { CompanylistComponent } from './user1/companylist/companylist.component';
import { LogoutComponent } from './user1/logout/logout.component';
import { LoginGuard } from './user1/login.guard';
import { UserprofileComponent } from './user1/userprofile/userprofile.component';
import { UpdateprofileComponent } from './user1/updateprofile/updateprofile.component';



const routes: Routes = [
   {path:'register',component:SignupComponent},
   {path:'login',component:LoginComponent},
   {path:'users',component:UsersComponent},
   {path:'user',component:UserComponent},
   {path:'landing',component:LandingComponent},
   {path:'import',component:ImportComponent},
   {path:'userhomepage',component:UserhomepageComponent,canActivate:[LoginGuard]},
   {path:'comparecompany',component:ComparecompanyComponent},
   {path:'addCompany',component:AddcompanyComponent},
   {path:'stockexchangedetails',component:StockexchangedetailsComponent},
   {path:'updatecompany',component:UpdatecompanyComponent},
   {path:'comparesector',component:ComparesectorComponent},
   {path:'ipo',component:IpoComponent},
   {path:'company',component:CompanyComponent},
   {path:'home',component:HomeComponent},
   {path:'manageipo',component:ManageIpoComponent},
   {path:'ipo',component:IpoComponent},
   {path:'updateipo',component:UpdateIpoComponent},
   {path:'activate',component:ActivationComponent},
   {path:'stockexchange',component:StockexchangeComponent},
   {path:'updatestockexchange',component:UpdatestockexchangeComponent},
   {path:'charts',component:ChartsComponent},
   {path:'iposlist',component:IposListComponent},
   {path:'companylist',component:CompanylistComponent},
   {path:'logout',component:LogoutComponent},
   {path:'profile',component:UserprofileComponent},
   {path:'updateprofile',component:UpdateprofileComponent}
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
