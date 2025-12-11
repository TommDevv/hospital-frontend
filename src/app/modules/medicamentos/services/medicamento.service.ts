import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medicamento, Stock } from '../../../models/medicamento.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MedicamentoService {
  private readonly baseUrl = `${environment.apiUrl}/medicamentos`;

  constructor(private http: HttpClient) {}

  getMedicamentos(): Observable<Medicamento[]> {
    return this.http.get<Medicamento[]>(`${this.baseUrl}/`);
  }

  getMedicamentoById(id: number): Observable<Medicamento> {
    return this.http.get<Medicamento>(`${this.baseUrl}/${id}/`);
  }

  getStock(): Observable<Stock[]> {
    return this.http.get<Stock[]>(`${this.baseUrl}/stock/`);
  }

  createMedicamento(medicamento: Medicamento): Observable<Medicamento> {
    return this.http.post<Medicamento>(`${this.baseUrl}/`, medicamento);
  }

  updateMedicamento(medicamento: Medicamento): Observable<Medicamento> {
    return this.http.put<Medicamento>(`${this.baseUrl}/${medicamento.cod_med}/`, medicamento);
  }

  deleteMedicamento(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}/`);
  }
}
