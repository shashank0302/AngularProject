import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Top10Service } from 'src/app/top10.service';

@Component({
  selector: 'app-viewthings',
  templateUrl: './viewthings.component.html',
  styleUrls: ['./viewthings.component.css']
})
export class ViewthingsComponent implements OnInit {
  searchRank:string
  constructor(private dsobj:Top10Service,private fullData:ActivatedRoute,private routerData:Router) { }

  list:any
  ngOnInit(){
    let id=this.fullData.snapshot.params.id

    this.dsobj.getTop10DataByname(id).subscribe(
      data=>{
        this.list=data
        console.log(this.list);
        
      },
      err=>{
        console.log("err is",err);
        
      }
    )
  
  }
  editdetails(id){
    this.routerData.navigateByUrl('admin/edit/'+id)
  }
}
