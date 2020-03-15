import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import {StockexchangeService} from 'src/app/service/stockexchange.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-stockexchangedetails',
  templateUrl: './stockexchangedetails.component.html',
  styleUrls: ['./stockexchangedetails.component.css']
})
export class StockexchangedetailsComponent implements OnInit {

  stockForm:FormGroup;
  constructor(private formBuilder:FormBuilder, private stockexchangeService: StockexchangeService,private router : Router) { }
  addStockExchange(){
    this.stockexchangeService.saveStockExchange(this.stockForm.value).subscribe(data => {
       alert('Stock Inserted Successfully' +data);
       this.router.navigate(['stockexchange']);
       this.stockForm.reset()
     });
   }
   
   deleteStockExchange(){
     this.stockexchangeService.deleteStockExchange(this.stockForm.value).subscribe(data=>{
       alert('Stock Deleted Successfully' +data);
     });
   }  
  ngOnInit() {
    this.stockForm=this.formBuilder.group({
      id:[],
      stock: ['',Validators.required],
      brief: ['',[Validators.required]],
      address: ['',Validators.required],
      remarks: ['',Validators.required],
     });
  }

}
