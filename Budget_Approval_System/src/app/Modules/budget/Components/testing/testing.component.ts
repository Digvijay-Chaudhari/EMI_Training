import { Component, OnInit, ViewChild } from '@angular/core';
import { Report } from 'src/app/Models/Report';
import { ReportService } from 'src/app/Services/report.service';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

  displayedColumns:string[]=["id","from","to","dateCreated","permanentLink","Action"];
  reportList:Report[];
  dataSource = new MatTableDataSource<Report>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private reportservice:ReportService) { }

  ngOnInit(): void {
    this.reportservice.getReport().subscribe(Response=>{
    this.reportList = Response;
    this.dataSource = new MatTableDataSource<Report>(Response);
    this.dataSource.paginator = this.paginator;
    
  }),(error: any)=>{
    console.log(error);
  }
  

  }

}
