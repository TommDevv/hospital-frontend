import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Empleado } from '../../../models/empleado.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private readonly baseUrl = `${environment.apiUrl}/empleados`;

  constructor(private http: HttpClient) {}

  getEmpleados(): Observable<Empleado[]> {
    return this.http.get<any[]>(`${this.baseUrl}/`).pipe(map(items => items.map(this.mapFromApi)));
  }

  getEmpleadoById(id: number): Observable<Empleado> {
    return this.http.get<any>(`${this.baseUrl}/${id}/`).pipe(map(this.mapFromApi));
  }

  createEmpleado(payload: any): Observable<any> {
    // El payload ya viene con { persona: {...}, empleado: {...} }
    return this.http.post<any>(`${this.baseUrl}/`, payload);
  }

  updateEmpleado(id: number, payload: any): Observable<any> {
    // El payload ya viene con { persona: {...}, empleado: {...} }
    return this.http.put<any>(`${this.baseUrl}/${id}/`, payload);
  }

  deleteEmpleado(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}/`);
  }

  private mapFromApi = (api: any): Empleado => ({
    id_emp: api.id_emp,
    documento: api.documento_id ?? api.documento?.documento ?? api.documento,
    id_dept: api.id_dept_id ?? api.id_dept?.id_dept ?? api.id_dept,
    cargo_id: api.cargo_id ?? api.cargo?.cargo_id,
    rol_id: api.rol_id ?? api.rol?.rol_id,
    hash_contra: api.hash_contra,
    persona: api.persona ?? api.documento,
    cargo: api.cargo ? { ...api.cargo, cargo_nombre: api.cargo.cargo_nombre ?? api.cargo.nombre } : api.cargo,
    rol: api.rol ? { ...api.rol, rol_nombre: api.rol.rol_nombre ?? api.rol.nombre } : api.rol,
  });

  private mapToApi = (empleado: Empleado) => ({
    documento_id: empleado.documento,
    id_dept_id: empleado.id_dept,
    cargo_id: empleado.cargo_id,
    rol_id: empleado.rol_id,
    hash_contra: empleado.hash_contra,
  });
}
