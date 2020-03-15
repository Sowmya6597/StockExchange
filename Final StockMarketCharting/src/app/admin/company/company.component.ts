import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { Company } from 'src/app/models/company';
import { Router } from '@angular/router';
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  constructor(private companyService :CompanyService, private router : Router) {}
  companies:Company[];
  ngOnInit() {

    this.companyService.getAllCompanies().subscribe(data=>{
      this.companies=data;
    })
  }
  deleteCompany(id:number)
  {
    this.companyService.deleteCompany(id).subscribe(data=>{
      this.companies=this.companies.filter(company => company.id !== id);
    });
  }
  updateCompany(company: Company): void {
    localStorage.removeItem('companyId');
    localStorage.setItem('companyId', company.id.toString());
    this.router.navigate(['updatecompany']);
  }

}