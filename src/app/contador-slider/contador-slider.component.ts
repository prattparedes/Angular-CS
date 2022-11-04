import { Component, DoCheck, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-contador-slider',
  templateUrl: './contador-slider.component.html',
  styleUrls: ['./contador-slider.component.css']
})
export class ContadorSliderComponent implements OnInit, DoCheck, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    console.log('OnInit ejecutado')
  }

  ngDoCheck(): void {
    console.log('DocheckEjecutado')
  }

  ngOnDestroy(): void {
    console.log('onDestroy ejecutado')
  }
}
