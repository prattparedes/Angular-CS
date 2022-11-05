import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
})
export class CursosComponent implements OnInit {
  public nombre: string;
  public followers: number;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.nombre = '';
    this.followers = 0;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.nombre = params['nombre'];
      this.followers = +params['followers'];
      
      if(this.nombre == 'ninguno') {
        this.router.navigate(['/home'])
      }
    });
  }

  redirigir() {
    this.router.navigate(['/home'])
  }
}
