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

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    LandingComponent,
    ImportComponent,
    ManagecompanyComponent,
    ManageExchangeComponent,
    UpdateIPOComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
