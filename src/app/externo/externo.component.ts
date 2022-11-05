import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService],
})
export class ExternoComponent implements OnInit {
  public user: any;
  public userId: any;
  public fecha: any;

  constructor(private _peticionesService: PeticionesService) {
    this.userId = '1';
  }

  ngOnInit(): void {
    this.fecha = new Date();
    this.cargaUsuario(1);
  }

  cargaUsuario(userId: any) {
    this.user = false;

    setTimeout(() => {
      this._peticionesService.getUser(this.userId).subscribe({
        next: (resp) => {
          // console.log(resp);
          console.log(userId);
          this.user = resp.data;
          console.log(this.user);
        },
        error: (err) => {
          console.log(err.error.msg);
        },
      });
    }, 1000)
  }
}
