import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/Pais';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [],
})
export class PorPaisComponent implements OnInit {
  hayError: boolean = false;
  placeholder: string = 'Por País...';
  paises: Pais[] = [];

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}

  buscar(termino: string) {
    this.paisService.buscarPais(termino).subscribe({
      next: (resp: Pais[]) => {
        this.hayError = false;
        this.paises = resp;
      },
      error: (err) => {
        this.hayError = true;
        this.paises = [];
      },
      complete: () => {},
    });
  }

  buscarRecomendados(termino: string) {}
}
