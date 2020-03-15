import { Component } from '@angular/core';
import {User} from './models/user';
import { Router } from '@angular/router';
import { AuthServiceService } from './service/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userLoggedIn:boolean=false;
  constructor(private authService:AuthServiceService){}
  //user=new User(100,'sony','abc@gmail.com',9912899281);

  ngDoCheck(){
    this.userLoggedIn=this.authService.isUserLoggedIn();
  }
}
