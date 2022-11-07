import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CursosComponent } from './cursos/cursos.component';
import { ExternoComponent } from './externo/externo.component';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'cursos/:nombre', component: CursosComponent },
  { path: 'cursos/:nombre/:followers', component: CursosComponent },
  { path: 'about', component: AboutComponent },
  { path: 'externo', component: ExternoComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
