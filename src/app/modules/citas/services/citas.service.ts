import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Cita } from '../../../models/cita.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CitasService {
  private readonly baseUrl = `${environment.apiUrl}/citas`;

  constructor(private http: HttpClient) {}

  getCitas(): Observable<Cita[]> {
    return this.http.get<any[]>(`${this.baseUrl}/`).pipe(map(items => items.map(this.mapFromApi)));
  }

  getCitaById(id: number): Observable<Cita> {
    return this.http.get<any>(`${this.baseUrl}/${id}/`).pipe(map(this.mapFromApi));
  }

  createCita(cita: Cita): Observable<Cita> {
    return this.http
      .post<any>(`${this.baseUrl}/`, this.mapToApi(cita))
      .pipe(map(this.mapFromApi));
  }

  updateCita(cita: Cita): Observable<Cita> {
    return this.http
      .put<any>(`${this.baseUrl}/${cita.id_cita}/`, this.mapToApi(cita))
      .pipe(map(this.mapFromApi));
  }

  deleteCita(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}/`);
  }

  private mapFromApi = (api: any): Cita => ({
    id_cita: api.id_cita,
    cod_pac: api.cod_pac_id ?? api.cod_pac?.cod_pac ?? api.cod_pac,
    id_emp: api.id_emp_id ?? api.id_emp?.id_emp ?? api.id_emp,
    fecha_hora: api.fecha_hora ? new Date(api.fecha_hora) : undefined as any,
    cod_servicio: api.cod_servicio_id ?? api.cod_servicio?.cod_servicio ?? api.cod_servicio,
    estado: api.estado,
    paciente: api.cod_pac?.documento?.nom_persona || api.cod_pac?.documento?.nombre || api.cod_pac,
    medico: api.id_emp?.documento?.nom_persona || api.id_emp?.documento?.nombre || api.id_emp,
    tipo_servicio: api.cod_servicio?.nombre || api.cod_servicio,
  });

  private mapToApi = (cita: Cita) => ({
    cod_pac_id: cita.cod_pac,
    id_emp_id: cita.id_emp,
    cod_servicio_id: cita.cod_servicio,
    fecha_hora: cita.fecha_hora,
    estado: cita.estado,
  });
}
