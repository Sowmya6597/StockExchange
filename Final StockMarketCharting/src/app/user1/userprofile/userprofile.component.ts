import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  user:User;
  constructor(private userService:UserService,private router:Router) { }
  ngOnInit() {
    const id = sessionStorage.getItem('userId');
    console.log(id);
    if(+id >0 ){
    this.userService.getUserById(+id).subscribe(data =>{
      this.user=data;
    });
  }
  }
  updateUser(){
    this.router.navigate(['/updateprofile']);
  }
}