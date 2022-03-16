import { NgModule } from '@angular/core';
import { PreloadAllModules, PreloadingStrategy, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { AddCustomerComponent } from './Components/add-customer/add-customer.component';
import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';
import { CustomerDetailsComponent } from './Components/customer-details/customer-details.component';
import { CustomerComponent } from './Components/customer/customer.component';
import { EditCustomerComponent } from './Components/edit-customer/edit-customer.component';
import { EmployeeDetailsComponent } from './Components/employee-details/employee-details.component';
import { EmployeeComponent } from './Components/employee/employee.component';
import { HomeComponent } from './Components/home/home.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { RouteParameterComponent } from './Components/route-parameter/route-parameter.component';
import { SwitchComponent } from './Components/switch/switch.component';
import { ProductDetailsComponent } from './FeatureModules/Product/products/Components/product-details/product-details.component';

const routes: Routes = [

  {path: '',redirectTo:'/home',pathMatch: 'full'}, 
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'switch', component:SwitchComponent},
  {path:'route/:id',component:RouteParameterComponent},
  {path:'employee',component:EmployeeComponent,children:[
    {path:'add',component:AddEmployeeComponent},
    {path:'details',component:EmployeeDetailsComponent},
    {path: 'edit',component:EmployeeDetailsComponent}
  ]},
  {path:'customer',component:CustomerComponent,children:[
    {path:'details/:id',component:CustomerDetailsComponent,children:[
      {path:'add',component:AddCustomerComponent},
      {path:'edit/:id',component:EditCustomerComponent}
    ]}]}
    ,

 {path:'product',loadChildren:()=> import('./FeatureModules/Product/products/products.module')
 .then(m=>m.ProductsModule)},
 {path:'product',loadChildren:()=> import('./FeatureModules/Employee/employees.module')
 .then(m=>m.EmployeesModule)},

  {path: '**',component:PageNotFoundComponent}

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
