import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TipoDocumento } from '../../../models/persona.model';

@Injectable({
  providedIn: 'root'
})
export class TiposDocumentoService {
  private tiposDocumento: TipoDocumento[] = [
    { tipo_doc_id: 1, tipo_doc_nombre: 'Cédula de Ciudadanía' },
    { tipo_doc_id: 2, tipo_doc_nombre: 'Tarjeta de Identidad' },
    { tipo_doc_id: 3, tipo_doc_nombre: 'Cédula de Extranjería' },
    { tipo_doc_id: 4, tipo_doc_nombre: 'Pasaporte' }
  ];

  constructor() { }

  getTiposDocumento(): Observable<TipoDocumento[]> {
    return of(this.tiposDocumento);
  }
}
