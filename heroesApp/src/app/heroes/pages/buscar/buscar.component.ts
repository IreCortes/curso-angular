import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { filter, tap } from 'rxjs';
import { Heroe } from '../../interfaces/Heroe';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [],
})
export class BuscarComponent implements OnInit {
  termino: String = '';
  heroes: Heroe[] = [];
  heroeSeleccionado!: Heroe;
  hayError: boolean = false;

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {}

  buscando() {
    this.heroesService.getSugerencias(this.termino).subscribe((heroes) => {
      this.hayError = heroes.length == 0 ? true : false;
      this.heroes = heroes;
    });
  }

  opcionSeleccionada(event: MatAutocompleteSelectedEvent) {
    const heroe: Heroe = event.option.value;
    this.termino = heroe == null ? '' : heroe.superhero;

    this.heroesService
      .getHeroe(heroe.id!)
      .pipe(tap((heroe) => console.log(heroe)))
      .subscribe((heroe) => (this.heroeSeleccionado = heroe));
  }
}
