import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/Model/Book';
import { BookService } from 'src/app/Services/book.service';

@Component({
  selector: 'app-display-book',
  templateUrl: './display-book.component.html',
  styleUrls: ['./display-book.component.css']
})
export class DisplayBookComponent implements OnInit {

  BookData:FormGroup;
  book:Book;


  constructor(private bookService:BookService,private router:Router,private formBuilder:FormBuilder,private routers:ActivatedRoute) { }

  ngOnInit(): void {
      this.BookData = this.formBuilder.group({
        id:[],
        bookName:['',Validators.required],
        auther:['',Validators.required],
        issuedDate:['',Validators.required],
        isAvailable:['',Validators.required]
      });

      this.getBookById(this.routers.snapshot.params['id']);
  }

  getBookById(id:Number){
    this.bookService.getBookDetailsById(id).subscribe(Response=>{
      this.book=Response;
      console.log(Response);
      this.attachBookDetails(Response);

    },(error=>{
      console.log(error);
    })
    )
  }

  attachBookDetails(bookdetail:Book){
      this.BookData.patchValue({
        id:bookdetail.id,
        bookName:bookdetail.bookName,
        auther:bookdetail.auther,
        issuedDate:bookdetail.issuedDate,
        isAvailable:bookdetail.isAvailable
      })
  }

  onFormSubmit(bookUpdate:Book){
      this.bookService.updateBook(bookUpdate,bookUpdate.id).subscribe(response=>{
       
        console.log(response);      
          this.router.navigate(['/admin/listbook'])
        },(error:any)=>{
          console.log(error);
        })
  }

}
