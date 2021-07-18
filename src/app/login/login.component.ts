import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onLogin(ref){
    let userLoginObj=ref.value
    console.log(userLoginObj)

    //if user name and password is admin then it will navigate
    if (userLoginObj.username!='admin' && userLoginObj.password!='admin')  
      alert("Invalid username")

    

    else{
      //navigates to admin
      this.router.navigateByUrl("/admin")

    }
  }
}
