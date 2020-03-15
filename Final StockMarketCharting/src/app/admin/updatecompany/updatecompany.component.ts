import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CompanyService } from 'src/app/admin/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatecompany',
  templateUrl: './updatecompany.component.html',
  styleUrls: ['./updatecompany.component.css']
})
export class UpdatecompanyComponent implements OnInit {

  updatecompanyForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private companyService: CompanyService, private router : Router) { }

  ngOnInit() {
    this.updatecompanyForm=this.formBuilder.group({
      id:[],
      companyname: ['',Validators.required],
      turnover: ['',[Validators.required]],
      ceo: ['',Validators.required],
      bod: ['',Validators.required],
      lse: ['',Validators.required],
      sector: ['',Validators.required],
      boc: ['',Validators.required],
      stock: ['',Validators.required],
      companyCode:['',Validators.required],
     });
     
    const id = localStorage.getItem('companyId');
    if (+id > 0) {
      this.companyService.getCompanyById(+id).subscribe(Company => {
        this.updatecompanyForm.patchValue(Company);
      });
    }
  }
  updateCompany() {
    this.companyService.updateCompany(this.updatecompanyForm.value).subscribe(data => {
      this.router.navigate(['company']);
    },
      error => {
        alert(error);
      });
    }
}