import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class SignupComponent implements OnInit {
  signupuser:FormGroup;
  constructor(private formBuilder:FormBuilder, private userService:UserService) { }

  ngOnInit() {
    this.signupuser=this.formBuilder.group({
    id:['',[Validators.required]],
    fname:['',[Validators.required]],
    lname:['',[Validators.required]],
    ename:['',[Validators.required]],
    psw:['',[Validators.required]],
    phno:['',[Validators.required]],
    });

  }
  addUser()
  {
    this.userService.saveUser(this.signupuser.value).subscribe
    (data => {
      console.log('User Inserted Successfully' +data);
    });
  }
  onSubmit()
  {
    console.log(this.signupuser.value);
  }

}
