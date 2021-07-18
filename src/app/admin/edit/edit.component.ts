import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Top10Service } from 'src/app/top10.service';
import { Data } from '../models/data.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private dsobj:Top10Service,private fullData:ActivatedRoute,private routerData:Router) { }
  id:string
  prevData:any
  ngOnInit(){
    this.id=this.fullData.snapshot.params.id
    this.dsobj.getTop10DetailedData(this.id).subscribe(
      data=>{
        this.prevData=data
        console.log(this.prevData);
        
      },
      err=>{
        console.log("err is",err);
        
      }
    )
  }
  dataModel=new Data('0','','','','','','','','','')
  onSubmitNewData(modobj){
    modobj.id=this.id
    modobj.rank=this.prevData.rank
    this.dsobj.updateMobile(modobj).subscribe(
      res=>{},
      err=>
      console.log("err is",err)
      
    )
    this.routerData.navigateByUrl('admin/viewthings')
  }

}
