import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Book } from 'src/app/Model/Book';
import { BookService } from 'src/app/Services/book.service';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {

  bookList:Book[];
  displayedColumns=['id','bookName','auther','issuedDate','isAvailable','Delete','Update'];
  dataSource = new MatTableDataSource<Book>();

  constructor(private bookService:BookService,private router:Router,private toaster:ToastrService) { }

  ngOnInit(): void {

    this.bookService.getAllBooks().subscribe(Response=>{
      this.bookList=Response;
      console.log(this.bookList);
      this.router.navigate(['/admin/listbook'])
    },error=>{
      console.log(error);
    })


  }
 
  deleteBookById(id:Number){
    this.bookService.deleteBook(id).subscribe(Response=>{
      console.log(Response);
      this.router.navigate(['/listbook'])
      window.location.reload();

    },error=>{
      console.log(error);
    });

  }

  updateBookById(id:Number){
      console.log(id);
      this.router.navigate(['/admin/displaybook',id]);  
  }
}
