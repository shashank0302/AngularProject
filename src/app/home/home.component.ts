import { Component, OnInit } from '@angular/core';
import { Top10Service } from '../top10.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
    this.routerData.navigateByUrl('top10/'+id)

  }

}
