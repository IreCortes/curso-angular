import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interface/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  constructor(private dbzService: DbzService) {}

  getPersonajes = (): Personaje[] => {
    return this.dbzService.personajes;
  };

  agregarNuevoPersonaje = (personaje: Personaje) => {
    this.dbzService.addPersonaje(personaje);
  };
}
