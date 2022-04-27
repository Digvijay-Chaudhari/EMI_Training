import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Book } from '../Model/Book';
import { User } from '../Model/User';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  baseUrl="http://localhost:3000/Books";
  userUrl="http://localhost:3000/User";

  constructor(private http:HttpClient) { }

  private handleError(errorResponse:HttpErrorResponse)
  {
    if(errorResponse.error instanceof ErrorEvent)
    {
      console.log('Client Side Error',errorResponse.error);
    }
    else
    {
      console.log('Server Side error',errorResponse.error);
    }
 
    return throwError('their is error in code');
  }

  getAllBooks():Observable<Book[]>{
    return this.http.get<Book[]>(this.baseUrl).pipe(catchError(this.handleError));
  }

  addBooks(book:any) : Observable<Book>{
    return this.http.post<Book>(this.baseUrl,book);
  }

  deleteBook(id:Number):Observable<Book>{
    const url=`${this.baseUrl}/${id}`;
    return this.http.delete<Book>(url).pipe(catchError(this.handleError));
  }

  getBookDetailsById(id:Number):Observable<Book>{
    const url=`${this.baseUrl}/${id}`;
    return this.http.get<Book>(url).pipe(catchError(this.handleError));
  }

  updateBook(book:any,id:number):Observable<Book>{
    const url=`${this.baseUrl}/${id}`;
    return this.http.put<Book>(url,book).pipe(catchError(this.handleError));
  }

  public getUserInfo(){
    return this.http.get(this.userUrl).pipe(catchError(this.handleError));
  }

//   saveCourse(courseId:number, changes: Partial<Course>): Observable<Course> {
//     return this.http.put<Course>(`/api/courses/${courseId}`, changes);
// }


  updateUserInfo(id:number,changes: Partial<User>):Observable<User>
  {
    const url=`${this.userUrl}/${id}`;
    return this.http.put<User>(url,changes);
  }


}
