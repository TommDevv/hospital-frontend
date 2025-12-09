import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HistoriaClinica } from '../../../models/historia-clinica.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HistoriaService {
  private readonly baseUrl = `${environment.apiUrl}/historias`;

  constructor(private http: HttpClient) {}

  getHistorias(): Observable<HistoriaClinica[]> {
    return this.http.get<HistoriaClinica[]>(`${this.baseUrl}/`);
  }

  getHistoriaById(id: number): Observable<HistoriaClinica> {
    return this.http.get<HistoriaClinica>(`${this.baseUrl}/${id}/`);
  }

  createHistoria(historia: HistoriaClinica): Observable<HistoriaClinica> {
    return this.http.post<HistoriaClinica>(`${this.baseUrl}/`, historia);
  }
}
