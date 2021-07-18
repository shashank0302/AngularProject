import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class Top10Service {
  name:any
  constructor(private httpObject:HttpClient) { }

  getData():Observable<any>{
    return this.httpObject.get('http://localhost:3000/top10')
  }

  getTop10DataByname(id):Observable<any>{
    this.name=id
    return this.httpObject.get('http://localhost:3000/'+id)
  } 
  getTop10DetailedData(id):Observable<any>{
    return this.httpObject.get('http://localhost:3000/'+this.name+'/'+id)
  }
  updateMobile(modObj):Observable<any>{
    return this.httpObject.put("http://localhost:3000/"+this.name+'/'+modObj.id,modObj)
  }


}
