import { Component, OnInit } from '@angular/core';
import {UserService} from 'src/app/service/user.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userService :UserService, private router : Router) {}
  users:User[];
  ngOnInit() {

    this.userService.getAllUsers().subscribe(data=>{
      this.users=data;
    })
  }
  deleteUser(id:number)
  {
    this.userService.deleteUser(id).subscribe(data=>{
      this.users=this.users.filter(user => user.id !== id);
    });
  }
  updateUser(user: User): void {
    localStorage.removeItem('userId');
    localStorage.setItem('userId', user.id.toString());
    this.router.navigate(['user']);
  }

}
