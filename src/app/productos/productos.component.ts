import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  public titulo: string = "Productos Disponibles";
  public productos: Array<Producto>

  constructor() {
    this.productos = [
      new Producto('Pantalon Trekking', 'CAT', 'verde oscuro', 45, true),
      new Producto('Zapato acero', 'ADIDAS', 'rojo fuego', 95, false),
      new Producto('Mochila montañera 120L', 'Peruvian', 'azul marino', 120, true),
      new Producto('Camisa de campo', 'Johnny', 'Blanco', 30, true)
    ];
  }

  ngOnInit(): void {
    console.log(this.productos)
  }
}
