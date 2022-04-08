import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor(private giftService: GifsService) {}

  ngOnInit(): void {}

  get historial() {
    return this.giftService.historial;
  }

  buscar(query: string) {
    console.log(query);
    this.giftService.buscarGifs(query);
  }
}
