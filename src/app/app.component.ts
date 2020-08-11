import {Component} from '@angular/core';
import {Product} from './models/product.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularStore';
  texto = 'texto';
  lista = ['test', 'hola', 'mundo'];
  cantidadProductos  = 0;



  agregarElemento(): void{
    this.lista.push(this.texto);
  }
  eliminarElemento(index: number): void{
    console.log(index);
    this.lista.splice(index, 1);
  }
  recargarPag(): void{
    // duckDuckGoImagesApi.image_search({query: 'John Duck', moderate: true, retries: 1, iterations: 1 });
    // image_search({ query: "birds", moderate: true }).then(results=>console.log(results));
    // window.location.reload();
  }

  idProductoAgregado(id: string): void{
    this.cantidadProductos++;
    console.log('productos agregados ' + this.cantidadProductos);
  }

  constructor() {
    console.log('constructor');
  }


}
