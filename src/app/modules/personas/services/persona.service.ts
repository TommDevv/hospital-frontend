import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Persona, TipoDocumento } from '../../../models/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private personas: Persona[] = [
    { 
      documento: '12345678', 
      tipo_doc_id: 1, 
      nombre: 'Juan Pérez García', 
      direccion: 'Calle 50 #25-30', 
      fecha_nac: new Date('1985-03-15'), 
      genero: 'M', 
      correo: 'juan.perez@email.com', 
      id_sede: 1 
    },
    { 
      documento: '87654321', 
      tipo_doc_id: 1, 
      nombre: 'María García López', 
      direccion: 'Carrera 30 #45-20', 
      fecha_nac: new Date('1990-07-22'), 
      genero: 'F', 
      correo: 'maria.garcia@email.com', 
      id_sede: 2 
    },
    { 
      documento: '11223344', 
      tipo_doc_id: 1, 
      nombre: 'Carlos López Martínez', 
      direccion: 'Avenida 15 #20-10', 
      fecha_nac: new Date('1988-11-05'), 
      genero: 'M', 
      correo: 'carlos.lopez@email.com', 
      id_sede: 1 
    },
    { 
      documento: '99887766', 
      tipo_doc_id: 1, 
      nombre: 'Ana Torres Ruiz', 
      direccion: 'Calle 80 #35-15', 
      fecha_nac: new Date('1995-02-18'), 
      genero: 'F', 
      correo: 'ana.torres@email.com', 
      id_sede: 3 
    }
  ];

  constructor() { }

  getPersonas(): Observable<Persona[]> {
    return of(this.personas);
  }

  getPersonaByDocumento(documento: string): Observable<Persona | undefined> {
    return of(this.personas.find(p => p.documento === documento));
  }

  createPersona(persona: Persona): Observable<Persona> {
    this.personas.push(persona);
    return of(persona);
  }

  updatePersona(persona: Persona): Observable<Persona> {
    const index = this.personas.findIndex(p => p.documento === persona.documento);
    if (index !== -1) {
      this.personas[index] = persona;
    }
    return of(persona);
  }

  deletePersona(documento: string): Observable<boolean> {
    const index = this.personas.findIndex(p => p.documento === documento);
    if (index !== -1) {
      this.personas.splice(index, 1);
      return of(true);
    }
    return of(false);
  }
}
