import { Injectable } from '@angular/core';
import {Product} from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/AnimalCrossing.jpg',
      title: 'Animal Corsssing',
      price: 80000,
      description: 'bla bla bla bla bla',
    },
    {
      id: '2',
      image: 'assets/images/cyberpunk.jpg',
      title: 'Cyberpunk 2077',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '3',
      image: 'assets/images/MarioCover.jpg',
      title: 'Paper Mario',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '4',
      image: 'assets/images/mkart.jpg',
      title: 'Mario Kart 8',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '5',
      image: 'assets/images/mo.jpg',
      title: 'Mario Odyssey',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '6',
      image: 'assets/images/smash.jpg',
      title: 'Super Smash Bros. Ultimate',
      price: 80000,
      description: 'bla bla bla bla bla'
    }
  ];

  constructor() { }

  getAllProducts(): Product[]{
    return this.products;
  }
  getProductById(id : string){
    return this.products.find(item => item.id === id );
  }
}
