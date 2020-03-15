import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/admin/company.service';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/company';

@Component({
  selector: 'app-companylist',
  templateUrl: './companylist.component.html',
  styleUrls: ['./companylist.component.css']
})
export class CompanylistComponent implements OnInit {

  constructor(private companyService :CompanyService, private router : Router) {}
  companies:Company[];
  ngOnInit() {

    this.companyService.getAllCompanies().subscribe(data=>{
      this.companies=data;
    })
  }
}
