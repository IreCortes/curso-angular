import { Injectable } from '@angular/core';
import { Personaje } from '../interface/dbz.interface';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000,
    },
    {
      nombre: 'Vegeta',
      poder: 7500,
    },
  ];

  constructor() {}

  get personajes() {
    return [...this._personajes];
  }
  addPersonaje = (pj: Personaje) => {
    this._personajes.push(pj);
  };
}
