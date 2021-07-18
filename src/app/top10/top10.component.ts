import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Top10Service } from '../top10.service';

@Component({
  selector: 'app-top10',
  templateUrl: './top10.component.html',
  styleUrls: ['./top10.component.css']
})
export class Top10Component implements OnInit {

  constructor(private dsobj:Top10Service,private fullData:ActivatedRoute,private routerData:Router) { }
  list:any[]
  searchRank:string
  ngOnInit(){

    let id=this.fullData.snapshot.params.id

    this.dsobj.getTop10DataByname(id).subscribe(
      data=>{
        this.list=data

        
      },
      err=>{
        console.log("err is",err);
        
      }
    )
  }
  getdetailedData(id){
    this.routerData.navigateByUrl('top10-details/'+id)
  }

}
