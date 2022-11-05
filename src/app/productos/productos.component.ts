import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit {
  public titulo: string = 'Productos Disponibles';
  public productos: Array<Producto>;
  public marcas: string[];
  public color: string;
  public mi_marca: string;

  constructor() {
    this.color = 'orange';
    this.mi_marca = 'Troya';
    this.productos = [
      new Producto('Pantalon Trekking', 'CAT', 'verde oscuro', 45, true),
      new Producto('Zapato acero', 'ADIDAS', 'rojo fuego', 95, false),
      new Producto(
        'Mochila montañera 120L',
        'Peruvian',
        'azul marino',
        120,
        true
      ),
      new Producto('Casco de Geologo', 'Johnny', 'Blanco', 80, true),
      new Producto('Chaleco multifunción de campo', 'CAT', 'Blanco', 65, false),
      new Producto('Baston montañista', 'ADIDAS', 'Blanco', 40, true),
      new Producto('Brujula Brunton', 'Peruvian', 'Blanco', 110, false),
      new Producto('Brujula Brunton', 'Peruvian', 'Blanco', 125, true),
    ];
    this.marcas = new Array();
  }

  ngOnInit(): void {
    console.log(this.productos);

    this.getMarcas();
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
