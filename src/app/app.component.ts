import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-udemy-course';
  public mostrar_slider: boolean = true;

  onInputChange(event: any) {
    console.log(event.value);
  }

  ocultarSlider(value:boolean) {
    this.mostrar_slider = value;
  }
}
