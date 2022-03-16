import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }
  public authenticateUser(username: string,password: string)
  {
     if(username==='admin' && password==='admin123')
     {
       localStorage.setItem('currentuser','LoggedIn');
       return true;

     }

     else
     {
       return false;
     }
  }
}
