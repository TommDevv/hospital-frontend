import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Equipamiento } from '../../../models/equipamiento.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EquipamientoService {
  private readonly baseUrl = `${environment.apiUrl}/equipamiento`;

  constructor(private http: HttpClient) {}

  getEquipamiento(): Observable<Equipamiento[]> {
    return this.http.get<any[]>(`${this.baseUrl}/`).pipe(map(items => items.map(this.mapFromApi)));
  }

  getEquipamientoById(id: number): Observable<Equipamiento> {
    return this.http.get<any>(`${this.baseUrl}/${id}/`).pipe(map(this.mapFromApi));
  }

  createEquipamiento(equipamiento: any): Observable<Equipamiento> {
    return this.http.post<any>(`${this.baseUrl}/`, equipamiento).pipe(map(this.mapFromApi));
  }

  updateEquipamiento(equipamiento: any): Observable<Equipamiento> {
    return this.http.put<any>(`${this.baseUrl}/${equipamiento.cod_eq}/`, equipamiento).pipe(map(this.mapFromApi));
  }

  deleteEquipamiento(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}/`);
  }

  private mapFromApi = (api: any): Equipamiento => ({
    cod_eq: api.cod_eq,
    nom_eq: api.nom_eq,
    id_dept: api.id_dept_id ?? api.id_dept,
    departamento: api.departamento,
    estado: api.estado,
    fecha_mantenimiento: api.fecha_mantenimiento ? new Date(api.fecha_mantenimiento) : undefined as any,
    responsable: api.responsable_id ?? api.responsable,
    responsable_nombre: api.responsable ?? api.responsable_empleado?.persona?.nombre,
    responsable_empleado: api.responsable_empleado,
  });
}
