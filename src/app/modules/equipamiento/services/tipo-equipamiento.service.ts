import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface TipoEquipamiento {
  tipo_equipo_id: number;
  nombre: string;
}

@Injectable({
  providedIn: 'root'
})
export class TipoEquipamientoService {
  private readonly baseUrl = `${environment.apiUrl}/tipos-equipamiento`;

  constructor(private http: HttpClient) {}

  getTiposEquipamiento(): Observable<TipoEquipamiento[]> {
    return this.http.get<TipoEquipamiento[]>(`${this.baseUrl}/`);
  }

  getTipoEquipamientoById(id: number): Observable<TipoEquipamiento> {
    return this.http.get<TipoEquipamiento>(`${this.baseUrl}/${id}/`);
  }
}
