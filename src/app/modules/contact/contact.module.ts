import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactoComponent} from "./components/contacto.component";
import {ContactRoutingModule} from "./contact-routing.module";



@NgModule({
  declarations: [
    ContactoComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
