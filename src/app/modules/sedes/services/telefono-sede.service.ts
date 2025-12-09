import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TelefonoSede } from '../../../models/sede.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TelefonoSedeService {
  private readonly baseUrl = `${environment.apiUrl}/sedes`;

  constructor(private http: HttpClient) {}

  getTelefonosBySede(id_sede: number): Observable<TelefonoSede[]> {
    return this.http.get<TelefonoSede[]>(`${this.baseUrl}/${id_sede}/telefonos/`);
  }

  addTelefono(telefono: TelefonoSede): Observable<TelefonoSede> {
    return this.http.post<TelefonoSede>(`${this.baseUrl}/${telefono.id_sede}/telefonos/`, telefono);
  }

  deleteTelefono(id_sede: number, numero: string): Observable<void> {
    const params = new HttpParams().set('numero', numero);
    return this.http.delete<void>(`${this.baseUrl}/${id_sede}/telefonos/`, { params });
  }
}
