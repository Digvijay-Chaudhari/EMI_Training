import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Report } from '../Models/Report';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  baseurl= 'http://localhost:7000/Reports';

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

  public getReport():Observable<Report[]>{

    return this.http.get<Report[]>(this.baseurl).pipe(catchError(this.handleError));
    
  }

  public deleteReport(id:number):Observable<Report>{
    const url =`${this.baseurl}/${id}`;
    return this.http.delete<Report>(url).pipe(catchError(this.handleError));
  }

  public getReportById(id:number):Observable<Report>{
    const url=`${this.baseurl}/${id}`;
    return this.http.get<Report>(url).pipe(catchError(this.handleError));
  }
}
