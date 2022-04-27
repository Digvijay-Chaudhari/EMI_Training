import { flush, TestBed, tick, waitForAsync } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import { BookService } from './book.service';
import { Book } from '../Model/Book';
import { of } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

fdescribe('BookService', () => {
  let bookService: BookService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [ 
        BookService, 
        { provide: 'http://localhost:3000/Books', 
          useValue: 'apiurl',
        }
    ]

    });

    bookService = TestBed.inject(BookService);
    httpTestingController = TestBed.get(HttpTestingController);

  });

  it('should be created', () => {

    expect(bookService).toBeTruthy();
  });

//   const BookData : Book[]= [
//     {id:2, bookName: "SQL Server",auther: "Prasad", issuedDate: new Date("2022-03-17"),isAvailable: true},
//     {id:3, bookName: "Angular",auther: "Siddhu patil", issuedDate: new Date("2022-03-17"),isAvailable: true}
//   ];

  it('Should getAllBooks',()=>{

    const MockBookData = [
      {id:2, bookName: "SQL Server",auther: "Prasad", issuedDate: new Date("2022-03-17"),isAvailable: true},
      {id:3, bookName: "Angular",auther: "Siddhu patil", issuedDate: new Date("2022-03-17"),isAvailable: true}
    ];

    let response:Book[];
   // spyOn(bookService,'getAllBooks').and.returnValue(of(MockBookData));
    bookService.getAllBooks().subscribe(res =>{
       response=res;
       expect(response).toEqual(MockBookData)
    });

    const req = httpTestingController.expectOne('http://localhost:3000/Books');
    expect(req.request.method).toBe('GET');
    req.flush(MockBookData);
    httpTestingController.verify();
  
  })

  it('Should get Books by ID',()=>{
    const MockBookData = 
        {id:2, bookName: "SQL Server",auther: "Prasad", issuedDate: new Date("2022-03-17"),isAvailable: true};

      let response:Book;
      //spyOn(bookService,'getBookDetailsById').and.returnValue(of(MockBookData));
      bookService.getBookDetailsById(2).subscribe(res=>{
          response = res;
          expect(response).toEqual(MockBookData);
      })

      const req = httpTestingController.expectOne('http://localhost:3000/Books/2');
    expect(req.request.method).toBe('GET');
    req.flush(MockBookData);
    httpTestingController.verify();

  })

  it('Should addBooks',()=>{
    const MockBookData = 
    { bookName: "SQL Server",auther: "", issuedDate: new Date("2022-03-17"),isAvailable: true};

    bookService.addBooks(MockBookData).subscribe(res=>{
        expect(res).toBeTruthy();
        expect(res.bookName).toBe('SQL Server');
    })
    
    const req = httpTestingController.expectOne('http://localhost:3000/Books');
    expect(req.request.method).toBe('POST');
    req.flush(MockBookData);
    httpTestingController.verify();
  })

  it('Should update Book',()=>{
    const mockData = {bookName: "SQL Server",auther: "updated", issuedDate: new Date("2022-03-17"),isAvailable: true};
    bookService.updateBook(mockData,3).subscribe(res=>{
      expect(res).toBeTruthy();
      expect(res.auther).toEqual('updated');
    })

    const req = httpTestingController.expectOne('http://localhost:3000/Books/3');
    expect(req.request.method).toBe('PUT');
    req.flush(mockData);
    httpTestingController.verify();
  })

  it('Should delete book',()=>{
    bookService.deleteBook(1).subscribe(res=>{
        expect(res).toBeTruthy();       
    })
    const req = httpTestingController.expectOne('http://localhost:3000/Books/1');
    expect(req.request.method).toBe('DELETE');
    expect(req.cancelled).toBeFalsy(); 
    expect(req.request.responseType).toEqual('json');
    req.flush(1);
  })

  it('Should get UserInfo',()=>{
   const mockUserData = {id:1,userName:'Digvijay',requestCount:0};

   bookService.getUserInfo().subscribe(res=>{
     expect(res).toBeTruthy();
     expect(res).toEqual(mockUserData);
   })

   const req = httpTestingController.expectOne('http://localhost:3000/User');
   expect(req.request.method).toBe('GET');
   req.flush(mockUserData);
    httpTestingController.verify();

  })

  it('Should update userinfo',()=>{
    const mockUserData = {id:1,userName:'Digvijay',requestCount:2};

    bookService.updateUserInfo(1,mockUserData).subscribe(res =>{
      expect(res).toBeTruthy();
      expect(res.requestCount).toEqual(2);
      
    })
    const req = httpTestingController.expectOne('http://localhost:3000/User/1');
    expect(req.request.method).toBe('PUT');
    req.flush(mockUserData);
     httpTestingController.verify();
  })

});
