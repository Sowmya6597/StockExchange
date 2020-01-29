import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class SignupComponent implements OnInit {
  signupuser:FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.signupuser=this.formBuilder.group({
    fname:['',[Validators.required]],
    lname:['',[Validators.required]],
    ename:['',[Validators.required]],
    psw:['',[Validators.required]],
    phno:['',[Validators.required]],
    });

  }
  onSubmit()
  {
    console.log(this.signupuser.value);
  }

}
