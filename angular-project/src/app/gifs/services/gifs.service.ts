import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GIF, Datum } from '../gif';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apiKey = 'Z8vfNFaLpet9Gw8QUJ57pnPfq8ZqOiiP';
  private servicioURL: string = 'https://api.giphy.com/v1/gifs';
  private _historial: string[] = [];
  private _resultados: Datum[] = [];

  get historial() {
    return [...this._historial];
  }

  get resultados() {
    return [...this._resultados];
  }

  constructor(private http: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    if (this._historial.length > 0) this.buscarGifs(this._historial[0]);
  }

  buscarGifs(query: string) {
    query = query.trim().toLocaleLowerCase();

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }
    console.log(this._historial);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', query)
      .set('limit', '10');

    this.http
      .get<GIF>(`${this.servicioURL}/search`, { params: params })
      .subscribe((resp) => {
        console.log(resp.data);
        this._resultados = resp.data;
      });
  }
}
