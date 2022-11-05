import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
  providers: [ProductoService]
})
export class ProductosComponent implements OnInit {
  public titulo: string = 'Productos Disponibles';
  public productos: Array<Producto>;
  public marcas: string[];
  public color: string;
  public mi_marca: string;

  constructor(
    private _productoService: ProductoService
  ) {
    this.color = 'orange';
    this.mi_marca = 'Troya';
    this.marcas = new Array();
    this.productos = new Array();
  }

  ngOnInit(): void {
    console.log(this.productos);
    this.productos = this._productoService.getProductos()
    this.getMarcas();
    console.log(this._productoService.getTexto())
  }

  getMarcas() {
    this.productos.forEach((producto, index) => {
      if (this.marcas.indexOf(producto.marca) < 0) {
        this.marcas.push(producto.marca);
      }
    });
  }

  getMarca() {
    alert(this.mi_marca);
  }

  addMarca() {
    this.marcas.push(this.mi_marca);
  }

  deleteMarca(index: number) {
    // delete this.marcas[index];
    this.marcas.splice(index, 1)
  }

  onBlur() {
    console.log('has salido del input')
  }

  mostrarPalabra() {
    alert(this.mi_marca)
  }
}
