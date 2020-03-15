import { Component, OnInit } from '@angular/core';
import { IpoService } from 'src/app/service/ipo.service';
import {Ipo} from 'src/app/models/updateipo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ipos-list',
  templateUrl: './ipos-list.component.html',
  styleUrls: ['./ipos-list.component.css']
})
export class IposListComponent implements OnInit {

  constructor(private ipoService : IpoService , private router : Router) {}
  ipos: Ipo[];

  ngOnInit() {
    this.ipoService.getAllIpos().subscribe(data=>{
      this.ipos=data;
    })
  }

}
