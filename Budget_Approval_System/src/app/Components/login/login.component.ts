import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password:string;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    if(this.username =="Digvijay" && this.password =="12345"){
      console.warn(this.username,this.password);
      this.router.navigate(["/dashboard/landingpage"]);
    }
    else{
      alert("enter valid information");
    }
   
  }

}
