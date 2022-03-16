import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
employees: Employee[]=[
 {Id: 1, name: 'Mayura',location: 'Pune',designation: 'Trainer',salary:4568},
 {Id: 2, name: 'Sam',location: 'Delhi',designation: 'Manager',salary:89568},
 {Id: 3, name: 'Ankit',location: 'Mumbai',designation: 'Devops',salary:9865}
  
]
  constructor() { }

  ngOnInit(): void {
  }

  selectedEmployee: Employee=new Employee();
  public displayDetails(emp: Employee):void
  {
   // this.selectedEmployee=emp;
  this.selectedEmployee=Object.assign({},emp);
  }

  public updateDetails(emp: Employee):void
  {
    console.log(emp);
    var e=this.employees.find(e=>e.Id==emp.Id);
   Object.assign(e,emp);
    alert ("Details Updated");
  }

}
