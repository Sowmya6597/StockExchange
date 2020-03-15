import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { User } from '../models/user';
import { AuthServiceService } from '../service/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signinForm:FormGroup;
users:User[];
  currentUser:User;
  constructor(private formBuilder:FormBuilder, private router:Router,private userService:UserService,private authService:AuthServiceService) { }
  ngOnInit() {
    this.signinForm =this.formBuilder.group ({
      id:[],
      email: ['',[Validators.required,Validators.email]],
      password: ['',Validators.required],
    });
this.userService.getAllUsers().subscribe(u =>{this.users=u;
})
}
  onSubmit():void{
    console.log(this.signinForm.value);
}
  login(){
    let userName=this.signinForm.controls.email.value;
    let password=this.signinForm.controls.password.value;
    const result$=this.authService.authenticate(userName,password);
    result$.subscribe(data=>{
      sessionStorage.setItem('userId',data.id.toString());
      console.log(data);
      alert(data.userType)
    if(data.userType=='ROLE_ADMIN'){
      this.router.navigate(['/landing']);
    }
    else{
      this.router.navigate(['/userhomepage']);
    }
    })
  }
}





// isValid(){
//   let admin_userName="admin@gmail.com";
//   let admin_password="admin";
//   let userName=this.signinForm.controls.email.value;
//   let password=this.signinForm.controls.password.value;
//   if((userName===admin_userName) && (password===admin_password)){
//     this.router.navigate(['/landing']);
//   }else{
//     if(this.login(userName,password)){
//       if(this.userService.isActivated(this.currentUser)){
//         localStorage.removeItem('userId');
//         localStorage.setItem('userId',this.currentUser.id.toString());
//         this.router.navigate(['/userhomepage']);
//       }else{
//         alert("please activate your account to login")
//       }
//     }else{
//       alert("Invalid username or password");
//       this.signinForm.reset();
//     }
//   }
// }
// login(userName:string,password:string){
//   for(let user of this.users){
//     if((userName===user.email)&&(password===user.password)){
//       this.currentUser=user;
//       return true;
//     }
//   }
//   return false;
// }
 
