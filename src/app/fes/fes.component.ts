import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'fes',
  templateUrl: './fes.component.html',
  styleUrls: ['./fes.component.css'],
})
export class FESComponent implements OnInit, DoCheck {
  public titulo: string;

  constructor() {
    this.titulo = 'ComponenteFES';
  }

  ngOnInit(): void {

  }

  ngDoCheck(): void {

  }

  cambiarTitulo(NuevoTitulo: string) {
    console.log('Titulo cambiado')
    this.titulo = NuevoTitulo;
  }
}
