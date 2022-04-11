import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/Pais';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [],
})
export class PorRegionComponent implements OnInit {
  placeholder: string = 'Por Region...';
  hayError: boolean = false;
  paises: Pais[] = [];
  regiones: string[] = [
    'EU',
    'EFTA',
    'CARICOM',
    'PA',
    'AU',
    'USAN',
    'EEU',
    'AL',
    'ASEAN',
    'CAIS',
    'CEFTA',
    'NAFTA',
    'SAARC',
  ];
  regionActiva: string = '';

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}

  buscar(termino: string) {
    this.paisService.buscarRegion(termino).subscribe({
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

  activaRegion(region: string) {
    this.regionActiva = region;
    this.buscar(region);
  }

  getClaseCSS(region: string) {
    return region === this.regionActiva ? 'btn-primary' : 'btn-outline-primary';
  }
}
