import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password:string;

  constructor(private router:Router,private loginservice:LoginService) { }

  ngOnInit(): void {
  }

  loginUser(form:NgForm):void{
    this.loginservice.authenticateEmployees(form.value);
  }

}
