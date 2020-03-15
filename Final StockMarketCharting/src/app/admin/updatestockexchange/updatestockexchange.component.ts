import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StockexchangeService } from 'src/app/service/stockexchange.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatestockexchange',
  templateUrl: './updatestockexchange.component.html',
  styleUrls: ['./updatestockexchange.component.css']
})
export class UpdatestockexchangeComponent implements OnInit {

  updatestockForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private stockexchangeService: StockexchangeService, private router : Router) { }

  ngOnInit() {
    this.updatestockForm=this.formBuilder.group({
      id:[],
      stock: ['',Validators.required],
      brief: ['',[Validators.required]],
      address: ['',Validators.required],
      remarks: ['',Validators.required],
     });
     
    const id = localStorage.getItem('stockId');
    if (+id > 0) {
      this.stockexchangeService.getStockExchangeById(+id).subscribe(Stock=> {
        this.updatestockForm.patchValue(Stock);
      });
    }
  }
  updateStockExchange() {
    this.stockexchangeService.updateStockExchange(this.updatestockForm.value).subscribe(data => {
      this.router.navigate(['stockexchange']);
    },
      error => {
        alert(error);
      });
    }
}