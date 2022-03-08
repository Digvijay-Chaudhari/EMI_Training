import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';

const routes: Routes = [
  {path:'',component:ProductDetailsComponent,children:[
    {path:'add',component:AddProductComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
