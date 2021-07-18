import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Top10Service } from '../top10.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  category:any
  constructor(private dsObj:Top10Service,private routerData:Router) { }

  ngOnInit(){
    this.dsObj.getData().subscribe(
      data=>{
        this.category=data
        console.log(this.category);
        
      },
      err=>{
        console.log("err occured",err)
      }
    )
  }

  getFullData(id){
    this.routerData.navigateByUrl('admin/viewthings/'+id)

  }

}
