import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent implements OnInit {

  updateUserProfile: FormGroup;
  user:User;
  constructor(private formBuilder:FormBuilder,private userService:UserService,
    private router: Router){ }
  ngOnInit() {
    this.updateUserProfile = this.formBuilder.group({
      id: [''],
      name: ['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required],
      confirmpassword:['',Validators.required],
      active:['']
    });
    const id = sessionStorage.getItem('userId');
    if(+id)
    {
    this.userService.getUserById(+id).subscribe(user => {
      this.updateUserProfile.patchValue(user);
    });
    }
  }
  updateTheUser(user: User){
    this.userService.updateUser(this.updateUserProfile.value).subscribe(u=>{
      this.router.navigate(['profile']);
    });
  }
}
