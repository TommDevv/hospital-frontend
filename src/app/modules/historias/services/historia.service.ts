import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { HistoriaClinica } from '../../../models/historia-clinica.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HistoriaService {
  private readonly baseUrl = `${environment.apiUrl}/historias`;
  private readonly baseListUrl = `${environment.apiUrl}/historias-base`;

  constructor(private http: HttpClient) {}

  getHistorias(): Observable<HistoriaClinica[]> {
    return this.http.get<any[]>(`${this.baseListUrl}/`).pipe(
      map(items => items.map(item => ({
        cod_hist: item.cod_hist,
        fecha_registro_hora: item.fecha_registro_hora ? new Date(item.fecha_registro_hora) : undefined as any,
        diagnostico: item.diagnostico,
        cod_pac: item.cod_pac,
        id_emp: item.id_emp,
        paciente: item.paciente,
        empleado: item.empleado
      })))
    );
  }

  getHistoriaById(id: number): Observable<HistoriaClinica> {
    return this.http.get<HistoriaClinica>(`${this.baseUrl}/${id}/`);
  }

  createHistoria(historia: HistoriaClinica): Observable<HistoriaClinica> {
    return this.http.post<HistoriaClinica>(`${this.baseUrl}/`, historia);
  }

  updateHistoria(historia: HistoriaClinica): Observable<HistoriaClinica> {
    return this.http.put<HistoriaClinica>(`${this.baseUrl}/${historia.cod_hist}/`, historia);
  }

  deleteHistoria(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}/`);
  }
}
