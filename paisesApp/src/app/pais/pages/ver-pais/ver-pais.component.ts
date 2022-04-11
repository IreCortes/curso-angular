import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Pais } from '../../interfaces/Pais';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [],
})
export class VerPaisComponent implements OnInit {
  hayError: boolean = false;
  pais!: Pais;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(({ id }) => {
    //   console.log(id);
    //   const suscription = this.paisService.buscarPaisPorId(id).subscribe({
    //     next: (evt) => {
    //       this.hayError = false;
    //       console.log(evt);
    //       this.pais = evt;
    //     },
    //     error: (err) => {
    //       this.hayError = true;
    //     },
    //     complete: () => {
    //       suscription.unsubscribe();
    //     },
    //   });
    // });

    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.paisService.buscarPaisPorId(id)))
      .subscribe((resp) => (this.pais = resp));
  }
}
