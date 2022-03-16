import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
alertMessage: 'Invalid Credential';
userName: string;
password: string;
  constructor(private service: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }
  public userLogin():any
  {
   console.log(this.userName);
   console.log(this.password);
    const result=this.service.authenticateUser(this.userName,this.password);
    if(result===true)
    {
      this.router.navigate(['about']);
    }

    else
    {
      this.router.navigate(['customer']);
      return this.alertMessage;
    }
  }
}
