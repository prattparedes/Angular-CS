import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContadorSliderComponent } from './contador-slider/contador-slider.component';
import { CursosComponent } from './cursos/cursos.component';
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [
  { path: '', component: ContadorSliderComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'cursos/:nombre', component: CursosComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
