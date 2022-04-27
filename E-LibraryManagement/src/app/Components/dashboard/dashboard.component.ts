import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/User';
import { BookService } from 'src/app/Services/book.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  booksData : any;
  searchKey:string;
  user:User;
  id:number;
  username:string;
  count:number;
  data:any;
  dataSource!:MatTableDataSource<any>;
  displayedColumns=['id','bookName','auther','issuedDate','isAvailable','issueBook'];

  constructor(private bookservice:BookService,private router:Router,private toaster: ToastrService) { }

  ngOnInit(): void {

    this.bookservice.getAllBooks().subscribe(Response=>{
      this.booksData=Response;
      this.dataSource = new MatTableDataSource(Response);
      console.log(this.booksData);

    },error=>{
      console.log(error);
    })

    this.bookservice.getUserInfo().subscribe(Response=>{
      console.log(Response);
     this.data =Response;
    });
  }


  onSearchClear(){
    this.searchKey ="";
    this.applyFilter(event);
  }
  
  applyFilter($event:any){
    console.log('Key up function');
    this.dataSource.filter = $event.target.value;
  }

  issueBook(){
    this.bookservice.getUserInfo().subscribe(Response=>{
      console.log(Response);
     this.data =Response;
    });
   
    for(var i in this.data){

      this.count=this.data[i].requestCount;
      this.id=this.data[i].id;
      this.username=this.data[i].userName;

    }
    
    if(this.count < 3)
    {
      debugger;
      console.log("inside the IF Block");
      this.count++;

      this.bookservice.updateUserInfo(this.id,{requestCount:this.count,id:this.id,userName:this.username}).subscribe(res=>{
        window.location.reload();
        this.toaster.success('Book is Successfully issued','Sucess',{positionClass :'top-center'});
        
       

        console.log(res);
      });
    }
    else
    {
      console.log("inside the else Block");
      this.toaster.error("Maximum 3 books can be issued",'error',{positionClass:'top-center'});

    }

  }
}
