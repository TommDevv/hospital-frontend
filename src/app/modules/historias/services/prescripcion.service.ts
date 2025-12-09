import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prescripcion } from '../../../models/prescripcion.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PrescripcionService {
  private readonly baseUrl = `${environment.apiUrl}/prescripciones`;

  constructor(private http: HttpClient) {}

  getPrescripciones(): Observable<Prescripcion[]> {
    return this.http.get<Prescripcion[]>(`${this.baseUrl}/`);
  }

  getPrescripcionesByHistoria(cod_hist: number): Observable<Prescripcion[]> {
    const params = new HttpParams().set('cod_hist', cod_hist.toString());
    return this.http.get<Prescripcion[]>(`${this.baseUrl}/`, { params });
  }

  createPrescripcion(prescripcion: Prescripcion): Observable<Prescripcion> {
    return this.http.post<Prescripcion>(`${this.baseUrl}/`, prescripcion);
  }
}
