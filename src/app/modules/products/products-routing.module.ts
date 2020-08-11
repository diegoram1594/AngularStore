import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from "@angular/router";
import {ProductDetailComponent} from "./components/product-detail/product-detail.component";
import {ProductsComponent} from "./components/products/products.component";

const routes : Routes = [
  {
    path : '',
    component : ProductsComponent
  },
  {
    path : ':id',
    component : ProductDetailComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports : [
    RouterModule
  ]
})
export class ProductsRoutingModule { }
