import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interface/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-nuevos-personajes',
  templateUrl: './nuevos-personajes.component.html',
  styleUrls: ['./nuevos-personajes.component.css'],
})
export class NuevosPersonajesComponent {
  nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  constructor(private dbzService: DbzService) {}

  agregar = () => {
    if (this.nuevo.nombre.trim().length === 0) return '';

    console.log(this.nuevo);
    this.dbzService.addPersonaje(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0,
    };
    return this.nuevo;
  };
}
