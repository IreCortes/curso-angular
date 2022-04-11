import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/Pais';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [],
})
export class PorCapitalComponent implements OnInit {
  placeholder: string = 'Por Capital...';
  hayError: boolean = false;
  paises: Pais[] = [];

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}

  buscar(termino: string) {
    this.paisService.buscarCapital(termino).subscribe({
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
