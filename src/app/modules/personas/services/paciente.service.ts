import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Paciente } from '../../../models/paciente.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  private readonly baseUrl = `${environment.apiUrl}/pacientes`;

  constructor(private http: HttpClient) {}

  getPacientes(): Observable<Paciente[]> {
    return this.http.get<any[]>(`${this.baseUrl}/`).pipe(map(items => items.map(this.mapFromApi)));
  }

  getPacienteById(id: number): Observable<Paciente> {
    return this.http.get<any>(`${this.baseUrl}/${id}/`).pipe(map(this.mapFromApi));
  }

  createPaciente(payload: any): Observable<any> {
    // El payload ya viene con { persona: {...} }
    return this.http.post<any>(`${this.baseUrl}/`, payload);
  }

  updatePaciente(id: number, payload: any): Observable<any> {
    // El payload es solo datos de persona a actualizar
    return this.http.put<any>(`${this.baseUrl}/${id}/`, payload);
  }

  deletePaciente(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}/`);
  }

  private mapFromApi = (api: any): Paciente => ({
    cod_pac: api.cod_pac,
    documento: api.documento_id ?? api.documento?.documento ?? api.documento,
    persona: api.documento,
  });

  private mapToApi = (paciente: Paciente) => ({
    documento_id: paciente.documento,
  });
}
