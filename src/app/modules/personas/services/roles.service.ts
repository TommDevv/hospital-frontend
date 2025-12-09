import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Rol } from '../../../models/empleado.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  private readonly baseUrl = `${environment.apiUrl}/roles`;

  constructor(private http: HttpClient) {}

  getRoles(): Observable<Rol[]> {
    return this.http.get<any[]>(`${this.baseUrl}/`).pipe(
      map(items =>
        items.map(item => ({
          rol_id: item.rol_id,
          rol_nombre: item.nombre
        }))
      )
    );
  }
}
