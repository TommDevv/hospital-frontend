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

  createPaciente(paciente: Paciente): Observable<Paciente> {
    return this.http
      .post<any>(`${this.baseUrl}/`, this.mapToApi(paciente))
      .pipe(map(this.mapFromApi));
  }

  updatePaciente(paciente: Paciente): Observable<Paciente> {
    return this.http
      .put<any>(`${this.baseUrl}/${paciente.cod_pac}/`, this.mapToApi(paciente))
      .pipe(map(this.mapFromApi));
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
