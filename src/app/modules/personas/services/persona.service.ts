import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Persona } from '../../../models/persona.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private readonly baseUrl = `${environment.apiUrl}/personas`;

  constructor(private http: HttpClient) {}

  getPersonas(): Observable<Persona[]> {
    return this.http.get<any[]>(`${this.baseUrl}/`).pipe(map(items => items.map(this.mapFromApi)));
  }

  getPersonaByDocumento(documento: string): Observable<Persona> {
    return this.http.get<any>(`${this.baseUrl}/${documento}/`).pipe(map(this.mapFromApi));
  }

  createPersona(persona: Persona): Observable<Persona> {
    return this.http
      .post<any>(`${this.baseUrl}/`, this.mapToApi(persona))
      .pipe(map(this.mapFromApi));
  }

  updatePersona(persona: Persona): Observable<Persona> {
    return this.http
      .put<any>(`${this.baseUrl}/${persona.documento}/`, this.mapToApi(persona))
      .pipe(map(this.mapFromApi));
  }

  deletePersona(documento: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${documento}/`);
  }

  private mapFromApi = (api: any): Persona => ({
    documento: api.documento,
    tipo_doc_id: api.tipo_doc_id ?? api.tipo_doc?.tipo_doc_id,
    nombre: api.nom_persona ?? api.nombre,
    direccion: api.dir_per ?? api.direccion,
    fecha_nac: api.fecha_nac ? new Date(api.fecha_nac) : undefined as any,
    genero: api.genero,
    correo: api.correo_per ?? api.correo,
    id_sede: api.id_sede_id ?? api.id_sede?.id_sede,
    tipo_documento: api.tipo_doc,
  });

  private mapToApi = (persona: Persona) => ({
    documento: persona.documento,
    nom_persona: persona.nombre,
    fecha_nac: persona.fecha_nac,
    genero: persona.genero,
    dir_per: persona.direccion,
    correo_per: persona.correo,
    tipo_doc_id: persona.tipo_doc_id,
    id_sede_id: persona.id_sede,
  });
}
