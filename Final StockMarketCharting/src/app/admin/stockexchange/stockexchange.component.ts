import { Component, OnInit} from '@angular/core';
import { StockExchange } from 'src/app/models/stockexchange';
import {StockexchangeService} from 'src/app/service/stockexchange.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-stockexchange',
  templateUrl: './stockexchange.component.html',
  styleUrls: ['./stockexchange.component.css']
})
export class StockexchangeComponent implements OnInit {
  constructor(private stockService :StockexchangeService, private router : Router) {}
  stocks:StockExchange[];
  ngOnInit() {

    this.stockService.getAllStockExchanges().subscribe(data=>{
      this.stocks=data;
    })
  }
  deleteStockExchange(id:number)
  {
    this.stockService.deleteStockExchange(id).subscribe(data=>{
      this.stocks=this.stocks.filter(stock=> stock.id !== id);
    });
  }
  updateStockExchange(stock: StockExchange): void {
    localStorage.removeItem('stockId');
    localStorage.setItem('stockId', stock.id.toString());
    this.router.navigate(['updatestockexchange']);
  }

}