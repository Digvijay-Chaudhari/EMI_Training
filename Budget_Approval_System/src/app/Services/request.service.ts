import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { BudgetData } from '../Models/Budgetdata';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

   baseurl ='http://localhost:4200/BudgetData';

  constructor(private http:HttpClient) { }

  public getAllRequest(){
    return this.http.get<BudgetData[]>(this.baseurl);
  }

  public saveRequest(request:any):Observable<BudgetData>{
      return this.http.post<BudgetData>(this.baseurl,request);
  }

  public deleteRequest(request:any)
  {
    const url=`${this.baseurl}/${request.id}`;
     return this.http.delete(url);
  }

  // public deleteBook(book:any){
  //   const url=`${this.baseUrl}/${book.id}`
  //   return this._http.delete(url).pipe(
  //     tap(()=>{this.RefreshedComponent.next()})
  //   )
  // }
}


