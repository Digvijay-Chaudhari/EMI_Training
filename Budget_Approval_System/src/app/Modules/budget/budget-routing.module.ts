import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HeaderComponent } from './Components/header/header.component';
import { LandingpageComponent } from './Components/landingpage/landingpage.component';
import { MyRequestComponent } from './Components/my-request/my-request.component';  
import { ReportActionComponent } from './Components/report-action/report-action.component';
import { TestingComponent } from './Components/testing/testing.component';
import { ViewhistoryComponent } from './Components/viewhistory/viewhistory.component'; 

const routes: Routes = [
      {path:'',component:DashboardComponent,children:[
      {path:"landingpage", component:LandingpageComponent},
      {path:"header", component:HeaderComponent},
      {path:"myrequest", component:MyRequestComponent},
      {path:"viewhistory",component:ViewhistoryComponent},
      {path:"testing",component:TestingComponent},
      {path:'action/:id',component:ReportActionComponent},
      {path:'',redirectTo:'/dashboard/landingpage',pathMatch: 'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BudgetRoutingModule { }
