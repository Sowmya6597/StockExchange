import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  

  constructor(private router:Router) { }
    importdata(){
      this.router.navigate(['/import']);
    }
    ipo(){
      this.router.navigate(['/ipo']);
    }
    ipos(){
      this.router.navigate(['/manageipo']);
    }
    companylist(){
      this.router.navigate(['/addCompany']);
    }
    companylists(){
      this.router.navigate(['/company']);
    }
    stockexchangelist(){
      this.router.navigate(['/stockexchangedetails']);
    }
    stockexchangelists(){
      this.router.navigate(['/stockexchange']);
    }
    

  ngOnInit() {
  }

}
