import { Component, Input, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/Pais';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styleUrls: ['./pais-tabla.component.css'],
})
export class PaisTablaComponent implements OnInit {
  @Input('paises')
  paises: Pais[] = [];

  constructor() {}

  ngOnInit(): void {}
}
