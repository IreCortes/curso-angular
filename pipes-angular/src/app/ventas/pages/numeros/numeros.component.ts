import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
})
export class NumerosComponent implements OnInit {
  ventasNetas: number = 12123123.4543;
  porcentaje: number = 0.48;
  constructor() {}

  ngOnInit(): void {}
}
