import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Pais } from '../interfaces/Pais';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  buscarPais(pais: string): Observable<Pais[]> {
    const url = `${this.apiUrl}/name/${pais}`;
    return this.http.get<Pais[]>(url);
  }

  buscarCapital(capital: string): Observable<Pais[]> {
    const url = `${this.apiUrl}/capital/${capital}`;
    return this.http.get<Pais[]>(url);
  }

  buscarRegion(region: string): Observable<Pais[]> {
    const params = new HttpParams().set(
      'fields',
      'name;capital;alpha2code;flag;population'
    );
    const url = `https://restcountries.com/v2/regionalbloc/${region}`;
    return this.http.get<Pais[]>(url, { params });
  }

  buscarPaisPorId(id: string): Observable<Pais> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Pais>(url);
  }
}
