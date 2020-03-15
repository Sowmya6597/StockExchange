import { Component, OnInit } from '@angular/core';
import { IpoService } from 'src/app/service/ipo.service';
import { Router } from '@angular/router';
import {Ipo} from 'src/app/models/updateipo';

@Component({
  selector: 'app-manage-ipo',
  templateUrl: './manage-ipo.component.html',
  styleUrls: ['./manage-ipo.component.css']
})
export class ManageIpoComponent implements OnInit {

  constructor(private ipoService : IpoService , private router : Router) {}
  ipos: Ipo[];
  ngOnInit() {

    this.ipoService.getAllIpos().subscribe(data=>{
      this.ipos=data;
    })
  }
  deleteIpo(id:number)
  {
    this.ipoService.deleteIpo(id).subscribe(data=>{
      this.ipos=this.ipos.filter(ipos => ipos.id !== id);
    });
  }
  updateIpo(ipos: Ipo): void {
    localStorage.removeItem('ipoId');
    localStorage.setItem('ipoId', ipos.id.toString());
    this.router.navigate(['updateipo']);
  }

}
