import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Product} from '../../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnChanges {

  @Input() producto: Product;
  @Output() productoAgregado: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void{
  }

  agregarCarrito(): void{
    console.log('Se agrega a carrito ' + this.producto.title);
    this.productoAgregado.emit(this.producto.id);
  }

}
