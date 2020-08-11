import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {ContactoComponent} from "./modules/contact/components/contacto.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {LayoutComponent} from "./components/layout/layout.component";
import {AdminGuard} from "./admin.guard";

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
        //component : ProductsComponent
        loadChildren : () => import("./modules/products/products.module").then(m => m.ProductsModule)
      },
      {
        path : 'contact',
        //component : ContactoComponent
        loadChildren : () => import("./modules/contact/contact.module").then(m => m.ContactModule),
        canActivate : [AdminGuard]
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
