import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './components/products/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductDetailComponent } from './components/products/product-detail/product-detail.component';
import { LayoutComponent } from './components/layout/layout.component';
import {SharedModule} from "./modules/shared/shared.module";



@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductsComponent,
    ContactoComponent,
    PageNotFoundComponent,
    ProductDetailComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
