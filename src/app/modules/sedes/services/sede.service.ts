import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SedeHospitalaria } from '../../../models/sede.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SedeService {
  private readonly baseUrl = `${environment.apiUrl}/sedes`;

  constructor(private http: HttpClient) {}

  getSedes(): Observable<SedeHospitalaria[]> {
    return this.http.get<SedeHospitalaria[]>(`${this.baseUrl}/`);
  }

  getSedeById(id: number): Observable<SedeHospitalaria> {
    return this.http.get<SedeHospitalaria>(`${this.baseUrl}/${id}/`);
  }

  createSede(sede: SedeHospitalaria): Observable<SedeHospitalaria> {
    return this.http.post<SedeHospitalaria>(`${this.baseUrl}/`, sede);
  }

  updateSede(sede: SedeHospitalaria): Observable<SedeHospitalaria> {
    return this.http.put<SedeHospitalaria>(`${this.baseUrl}/${sede.id_sede}/`, sede);
  }

  deleteSede(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}/`);
  }
}
