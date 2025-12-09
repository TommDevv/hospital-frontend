import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipamiento } from '../../../models/equipamiento.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EquipamientoService {
  private readonly baseUrl = `${environment.apiUrl}/equipamiento`;

  constructor(private http: HttpClient) {}

  getEquipamiento(): Observable<Equipamiento[]> {
    return this.http.get<Equipamiento[]>(`${this.baseUrl}/`);
  }
}
