import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userhomepage',
  templateUrl: './userhomepage.component.html',
  styleUrls: ['./userhomepage.component.css']
})
export class UserhomepageComponent implements OnInit {

  constructor(private router:Router) { }
  Ipo(){
    this.router.navigate(['/iposlist']);
  }
  compareCompany(){
    this.router.navigate(['/comparecompany']);
  }
  compareSector(){
    this.router.navigate(['/comparesector']);
  }
  companyList(){
    this.router.navigate(['/companylist']);
  }
  profile(){
    this.router.navigate(['/profile']);
  }
  ngOnInit() {
  }


}
