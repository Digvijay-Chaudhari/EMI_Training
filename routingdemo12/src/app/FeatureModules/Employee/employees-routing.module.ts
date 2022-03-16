import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';

const routes: Routes = [
  {path:"details",component:EmployeeDetailsComponent,children:[
    {path:"info",component:EmployeeInfoComponent}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
