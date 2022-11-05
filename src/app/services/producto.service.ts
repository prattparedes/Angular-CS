import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';

@Injectable()
export class ProductoService {
  public productos: Array<Producto>;

  constructor() {
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
  }

  getTexto() {
    return "Hola Mundo desde un servicio"
  }

  getProductos(): Array<Producto> {
    return this.productos
  }
}
