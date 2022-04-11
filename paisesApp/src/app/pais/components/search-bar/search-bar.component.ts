import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input()
  placeholder: string = '';

  debouncer: Subject<string> = new Subject();

  termino: string = '';

  constructor() {}

  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe((evt) => this.onDebounce.emit(evt));
  }

  buscar() {
    this.onEnter.emit(this.termino);
  }

  teclaPresionada(event: any) {
    this.debouncer.next(this.termino);
  }
}
