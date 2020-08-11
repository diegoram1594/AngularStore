import { Component, OnInit } from '@angular/core';
import {Params,ActivatedRoute} from "@angular/router";
import {ProductService} from "../../../services/product.service";
import {Product} from "../../../models/product.model";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
   product :Product;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {
    this.productService = new ProductService();
  }

  ngOnInit(): void {
      this.activatedRoute.params.subscribe((params : Params) =>{
      const id = params.id;
      console.log(id);
      this.product = this.productService.getProductById(id);
      if (!!this.product){
        console.log(this.product.title);
      }else{
        console.log('Product not found');
      }

    })
  }

}
