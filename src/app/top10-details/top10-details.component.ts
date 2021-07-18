import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataFormat } from 'src/model/datamodel.model';
import { Top10Service } from '../top10.service';

@Component({
  selector: 'app-top10-details',
  templateUrl: './top10-details.component.html',
  styleUrls: ['./top10-details.component.css']
})
export class Top10DetailsComponent implements OnInit {
  Detaileddata:DataFormat
  constructor(private dsobj:Top10Service,private fullData:ActivatedRoute,private routerData:Router) { }

  ngOnInit() {
  
    let id=this.fullData.snapshot.params.id
    this.dsobj.getTop10DetailedData(id).subscribe(
      data=>{
        this.Detaileddata=data
        console.log(this.Detaileddata);
        
      },
      err=>{
        console.log("err is",err);
        
      }
    )
  }
  addtocart(){
    alert("added to cart successfully")
  }
  

}
