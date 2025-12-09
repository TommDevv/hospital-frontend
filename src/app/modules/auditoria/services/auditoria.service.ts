import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuditoriaAcceso } from '../../../models/auditoria.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuditoriaService {
  private readonly baseUrl = `${environment.apiUrl}/auditoria`;

  constructor(private http: HttpClient) {}

  getEventos(): Observable<AuditoriaAcceso[]> {
    return this.http.get<AuditoriaAcceso[]>(`${this.baseUrl}/`);
  }
}
