import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {
  private readonly baseUrl = `${environment.apiUrl}/reportes`;

  constructor(private http: HttpClient) { }

  getTopEnfermedades(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/top-enfermedades/`);
  }

  getMedicamentosRecetados(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/medicamentos-recetados/`);
  }

  getMedicosTopConsultas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/medicos-top-consultas/`);
  }

  getTiemposAtencion(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/tiempos-atencion/`);
  }

  getPacientesPorSede(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/pacientes-por-sede/`);
  }
}
