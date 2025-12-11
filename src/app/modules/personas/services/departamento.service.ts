import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface Departamento {
  id_dept: number;
  nom_dept: string;
}

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {
  private readonly baseUrl = `${environment.apiUrl}/departamentos`;

  constructor(private http: HttpClient) {}

  getDepartamentos(): Observable<Departamento[]> {
    return this.http.get<Departamento[]>(`${this.baseUrl}/`);
  }

  getDepartamentoById(id: number): Observable<Departamento> {
    return this.http.get<Departamento>(`${this.baseUrl}/${id}/`);
  }
}
