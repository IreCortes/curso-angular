import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../interfaces/Heroe';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  apiUrl: string = environment.baseUrl + '/heroes';
  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(this.apiUrl);
  }

  getHeroe(id: string): Observable<Heroe> {
    return this.http.get<Heroe>(`${this.apiUrl}/${id}`);
  }

  getSugerencias(termino: String): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${this.apiUrl}?q=${termino}&_limit=6}`);
  }
}
