import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { CompanyService } from '../company.service';


@Component({
  selector: 'app-addcompany',
  templateUrl: './addcompany.component.html',
  styleUrls: ['./addcompany.component.css']
})
export class AddcompanyComponent implements OnInit {

  addcompany:FormGroup;
  constructor(private formBuilder:FormBuilder,private companyService:CompanyService) { }

  ngOnInit() {
    this.addcompany=this.formBuilder.group({
    sector:['',Validators.required],
    companyname:['',Validators.required],
    ceo:['',Validators.required],
    bod:['',Validators.required],
    turnover:['',Validators.required],
    });

  }
  addCompany()
  {
      this.companyService.saveCompany(this.addcompany.value).subscribe(data =>{
      console.log('Company Inserted Successfully' );
  });
 }
  }
