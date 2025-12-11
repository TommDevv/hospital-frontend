import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipamiento } from '../../../models/equipamiento.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EquipamientoService {
  private readonly baseUrl = `${environment.apiUrl}/equipamento`;

  constructor(private http: HttpClient) {}

  getEquipamiento(): Observable<Equipamiento[]> {
    return this.http.get<Equipamiento[]>(`${this.baseUrl}/`);
  }

  getEquipamientoById(id: number): Observable<Equipamiento> {
    return this.http.get<Equipamiento>(`${this.baseUrl}/${id}/`);
  }

  createEquipamiento(equipamiento: Equipamiento): Observable<Equipamiento> {
    return this.http.post<Equipamiento>(`${this.baseUrl}/`, equipamiento);
  }

  updateEquipamiento(equipamiento: Equipamiento): Observable<Equipamiento> {
    return this.http.put<Equipamiento>(`${this.baseUrl}/${equipamiento.cod_eq}/`, equipamiento);
  }

  deleteEquipamiento(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}/`);
  }
}
