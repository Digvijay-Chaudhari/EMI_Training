import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Employee } from 'src/app/Models/employee.model';


@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {
@Input() employee: Employee=new Employee();
@Output() employeeChange: EventEmitter<Employee>=new EventEmitter<Employee>();
  constructor() { }

  ngOnInit(): void {
  }

  public updateEmployeeDetails():void
  {
    this.employeeChange.emit(this.employee);
  }
}
