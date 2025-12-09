import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoServicio } from '../../../models/cita.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TipoServicioService {
  private readonly baseUrl = `${environment.apiUrl}/tipos-servicio`;

  constructor(private http: HttpClient) {}

  getTiposServicio(): Observable<TipoServicio[]> {
    return this.http.get<TipoServicio[]>(`${this.baseUrl}/`);
  }
}
