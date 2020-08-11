import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {ProductsComponent} from "./components/products/products.component";
import {ContactoComponent} from "./components/contacto/contacto.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {ProductDetailComponent} from "./components/products/product-detail/product-detail.component";
import {LayoutComponent} from "./components/layout/layout.component";

const routes: Routes = [
  {
    path : '',
    component :LayoutComponent,
    children : [
      {
        path : '',
        redirectTo: 'home',
        pathMatch : 'full'
      },
      {
        path : 'home',
        //component : HomeComponent
        loadChildren : () => import("./modules/home/home.module").then(m => m.HomeModule)
      },
      {
        path : 'products',
        component : ProductsComponent
      },
      {
        path : 'products/:id',
        component : ProductDetailComponent
      },
      {
        path : 'contact',
        component : ContactoComponent
      }
    ]
  },

  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: PreloadAllModules
    }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
