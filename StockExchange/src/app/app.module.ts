import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './user/register/register.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './admin/landing/landing.component';
import { ImportComponent } from './admin/import/import.component';
import { ManagecompanyComponent } from './admin/managecompany/managecompany.component';
import { ManageExchangeComponent } from './admin/manage-exchange/manage-exchange.component';
import { UpdateIPOComponent } from './admin/update-ipo/update-ipo.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './update/user/user.component';
import {from} from 'rxjs';
import { CompanydetailsComponent } from './admin/companydetails/companydetails.component';
import { UserhomepageComponent } from './user1/userhomepage/userhomepage.component';
import { ComparecompanyComponent } from './user1/comparecompany/comparecompany.component';

// import { ImportDtaComponent } from './import-dta/import-dta.component';
// import { ManagecomapanyComponent } from './managecomapany/managecomapany.component';
// import { ManageexchangeComponent } from './manageexchange/manageexchange.component';
// import { UpdateipodetailsComponent } from './updateipodetails/updateipodetails.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    LandingComponent,
    ImportComponent,
    ManagecompanyComponent,
    ManageExchangeComponent,
    UpdateIPOComponent,
    UsersComponent,
    UserComponent,
    CompanydetailsComponent,
    UserhomepageComponent,
    ComparecompanyComponent
    // ImportDtaComponent,
    // ManagecomapanyComponent,
    // ManageexchangeComponent,
    // UpdateipodetailsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
