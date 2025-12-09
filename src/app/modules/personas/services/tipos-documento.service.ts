import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { TipoDocumento } from '../../../models/persona.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TiposDocumentoService {
  private readonly baseUrl = `${environment.apiUrl}/tipos-documento`;

  constructor(private http: HttpClient) {}

  getTiposDocumento(): Observable<TipoDocumento[]> {
    return this.http.get<any[]>(`${this.baseUrl}/`).pipe(
      map(items =>
        items.map(item => ({
          tipo_doc_id: item.tipo_doc_id,
          tipo_doc_nombre: item.nombre
        }))
      )
    );
  }
}
