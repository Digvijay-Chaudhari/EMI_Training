import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BudgetData } from 'src/app/Models/Budgetdata';
import { RequestService } from 'src/app/Services/request.service';

@Component({
  selector: 'app-my-request',
  templateUrl: './my-request.component.html',
  styleUrls: ['./my-request.component.css']
})
export class MyRequestComponent implements OnInit {

  RequestData: BudgetData[];
  searchBox:any ="";

  constructor(private requestService:RequestService,private router:Router) { }

  ngOnInit(): void {
      debugger;
      this.requestService.getAllRequest().subscribe(res=>{
        this.RequestData = res;
      })
    
  }

  public deleteRequest(request:BudgetData){
      this.requestService.deleteRequest(request).subscribe(res=>{
        console.log(res);
        this.router.navigate(['/dashboard/myrequest']);
        window.location.reload();
      })
  }

}
