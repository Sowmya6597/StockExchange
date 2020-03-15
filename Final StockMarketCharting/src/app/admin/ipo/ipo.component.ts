import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {IpoService } from 'src/app/service/ipo.service';
@Component({
  selector: 'app-ipo',
  templateUrl: './ipo.component.html',
  styleUrls: ['./ipo.component.css']
})
export class IpoComponent implements OnInit {

  ipoForm:FormGroup;
  constructor(private formBuilder:FormBuilder, private ipoService:IpoService) { }
  
  addIpo(){
     this.ipoService.saveIpo(this.ipoForm.value).subscribe(data => {
        alert('Ipo Inserted Successfully' +data);
        this.ipoForm.reset()
      });
    }
    
    deleteIpo(){
      this.ipoService.deleteIpo(this.ipoForm.value).subscribe(data=>{
        alert('Ipo Deleted Successfully' +data);
      });
    }  
  ngOnInit() {
    this.ipoForm=this.formBuilder.group({
      id:[],
      companyname: ['',Validators.required],
      lse: ['',Validators.required],
      pps: ['',Validators.required],
      tnos: ['',Validators.required],
      odate: ['',Validators.required],
      remarks: ['',Validators.required],
     });
  }
}
