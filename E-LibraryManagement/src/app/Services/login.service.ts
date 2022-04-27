import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user:any;
  data:any;
  response:any;
  name:any
  isAuthenticated=false;
  isAdmin=false;
  isUser=false;

  constructor(private http:HttpClient,private router:Router,private toaster:ToastrService) { }

  public authenticateEmployees(data:any){

    return this.http.get("http://localhost:3200/Employee").subscribe(res=>{
      console.log(res);
      this.user=res;
      this.data = data;
      this.authenticateUser();
      this.navigateByRole();

    })
  }

  // public authenticateUser(){
  //   this.isCorrect= (this.employeeResponse.find((x:any) => {
  //     return x.userName == this.userFilledData.userName && x.password == this.userFilledData.password
  //   }))
  // }

  authenticateUser() {
    this.response = (this.user.find((x: any) => {
      debugger;
      return x.userName == this.data.userName && x.password == this.data.password
    }))
  }

  public navigateByRole(){
    if(this.response){
        this.checkRole()
    }
    else{
        this.toaster.error("Enter Correct Username and password");
    }
  }

  public checkRole(){
    debugger;
    this.name= this.response.name;

    if(this.response.role == 'admin'){
      this.isAuthenticated=true;
      this.isAdmin=true;
      this.router.navigate(["/admin"]);
    }
    else if(this.response.role == 'user'){
      this.isAuthenticated=true;
      this.isUser=true;
      this.router.navigate(["/user"]);
    }
  }


}
