import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from "./components/footer/footer.component";
import {HeaderComponent} from "./components/header/header.component";
import {AppRoutingModule} from "../../app-routing.module";
import {MaterialModule} from "../material/material.module";



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule
  ]
})
export class SharedModule { }
