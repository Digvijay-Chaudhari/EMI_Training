import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from 'src/app/Services/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent implements OnInit {
  BookData: FormGroup;

  constructor(
    private bookservice: BookService,
    private router: Router,
    private formbuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.BookData = this.formbuilder.group({
      id: ['', Validators.required],
      bookName: ['', Validators.required],
      auther: ['', Validators.required],
      issuedDate: ['', Validators.required],
      isAvailable: ['', Validators.required],
    });
  }

  public onFormSubmit(form: Form) {
    this.bookservice.addBooks(form).subscribe(
      (Response) => {
        const id = Response['id'];
        this.router.navigate(['/admin/listbook']);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
