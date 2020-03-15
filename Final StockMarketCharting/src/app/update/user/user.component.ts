import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  updateUserForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private userService: UserService, private router : Router) { }

  ngOnInit() {
    this.updateUserForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required],
      active:['']

    });

    const id = localStorage.getItem('userId');
    if (+id > 0) {
      this.userService.getUserById(+id).subscribe(User => {
        this.updateUserForm.patchValue(User);
      });
    }
  }
  updateUser() {
    this.userService.updateUser(this.updateUserForm.value).subscribe(data => {
      this.router.navigate(['users']);
    },
      error => {
        alert(error);
      });
  }
}
