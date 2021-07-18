import { Component } from '@angular/core';
import { Top10Service } from './top10.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  constructor(public dsobj:Top10Service){}
  logout(){
    localStorage.removeItem("username")
  }
}
