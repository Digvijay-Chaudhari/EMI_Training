import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './Components/add-book/add-book.component';
import { AdminComponent } from './Components/admin/admin.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { DisplayBookComponent } from './Components/display-book/display-book.component';
import { IssueBookComponent } from './Components/issue-book/issue-book.component';
import { ListBooksComponent } from './Components/list-books/list-books.component';
import { LoginComponent } from './Components/login/login.component';
import { TestComponent } from './Components/test/test.component';
import { UserComponent } from './Components/user/user.component';
import { AuthGuard } from './Guard/auth.guard';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'user',component:UserComponent,canActivate:[AuthGuard]},
  {path:'admin',component:AdminComponent,children:[
     {path:'listbook',component:ListBooksComponent},
     {path:'addbook',component:AddBookComponent},
     {path:'issuebook',component:IssueBookComponent,canActivate:[AuthGuard]},
     {path:'displaybook/:id',component:DisplayBookComponent,canActivate:[AuthGuard]}
  ]},
  {path:'IssueBookComponent',component:IssueBookComponent,canActivate:[AuthGuard]},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
