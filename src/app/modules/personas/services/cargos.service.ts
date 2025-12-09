import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Cargo } from '../../../models/empleado.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CargosService {
  private readonly baseUrl = `${environment.apiUrl}/cargos`;

  constructor(private http: HttpClient) {}

  getCargos(): Observable<Cargo[]> {
    return this.http.get<any[]>(`${this.baseUrl}/`).pipe(
      map(items =>
        items.map(item => ({
          cargo_id: item.cargo_id,
          cargo_nombre: item.nombre
        }))
      )
    );
  }
}
