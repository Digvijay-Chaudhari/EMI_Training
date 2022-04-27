import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';


const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch: 'full'},
  {path:"login", component: LoginComponent},
   {path:"dashboard", loadChildren:()=> import('../app/Modules/budget/budget.module').then(m=>m.BudgetModule)},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
