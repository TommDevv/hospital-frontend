import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Region } from '../../../models/sede.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegionService {
  private readonly baseUrl = `${environment.apiUrl}/regiones`;

  constructor(private http: HttpClient) {}

  getRegiones(): Observable<Region[]> {
    return this.http.get<Region[]>(`${this.baseUrl}/`);
  }
}
