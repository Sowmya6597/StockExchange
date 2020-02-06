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
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './update/user/user.component';
import {from} from 'rxjs';
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
import { CompanyComponent } from './admin/company/company.component';
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    LandingComponent,
    ImportComponent,
    ManagecompanyComponent,
    UsersComponent,
    UserComponent,
    CompanydetailsComponent,
    UserhomepageComponent,
    ComparecompanyComponent,
    AddcompanyComponent,
    StockexchangedetailsComponent,
    UpdateipoComponent,
    UpdatecompanyComponent,
    DeletecompanyComponent,
    ComparesectorComponent,
    IpoComponent,
    CompanyComponent,
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
