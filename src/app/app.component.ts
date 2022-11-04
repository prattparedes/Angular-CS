import { TypeofExpr } from '@angular/compiler';
import { Component } from '@angular/core';
import { Configuracion } from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-udemy-course';
  public description: string;
  public mostrar_slider: boolean = true;
  public config;

  constructor() {
    this.title = Configuracion.titulo;
    this.description = Configuracion.descripcion;
    this.config = Configuracion;
  }

  onInputChange(event: any) {
    console.log(event.value);
  }

  ocultarSlider(value: boolean) {
    this.mostrar_slider = value;
  }
}
