import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cita, TipoServicio } from '../../../models/cita.model';

@Injectable({
  providedIn: 'root'
})
export class CitasService {
  private citas: Cita[] = [
    { 
      id_cita: 1, 
      cod_pac: 1, 
      id_emp: 2, 
      fecha_hora: new Date('2024-12-10T09:00:00'), 
      cod_servicio: 1, 
      estado: 'tomada' 
    },
    { 
      id_cita: 2, 
      cod_pac: 2, 
      id_emp: 2, 
      fecha_hora: new Date('2024-12-10T10:30:00'), 
      cod_servicio: 2, 
      estado: 'en desarrollo' 
    },
    { 
      id_cita: 3, 
      cod_pac: 3, 
      id_emp: 5, 
      fecha_hora: new Date('2024-12-11T14:00:00'), 
      cod_servicio: 1, 
      estado: 'aplazada' 
    },
    { 
      id_cita: 4, 
      cod_pac: 4, 
      id_emp: 2, 
      fecha_hora: new Date('2024-12-12T11:00:00'), 
      cod_servicio: 3, 
      estado: 'tomada' 
    }
  ];

  constructor() { }

  getCitas(): Observable<Cita[]> {
    return of(this.citas);
  }

  getCitaById(id: number): Observable<Cita | undefined> {
    return of(this.citas.find(c => c.id_cita === id));
  }

  createCita(cita: Cita): Observable<Cita> {
    const newCita = { ...cita, id_cita: this.citas.length + 1 };
    this.citas.push(newCita);
    return of(newCita);
  }

  updateCita(cita: Cita): Observable<Cita> {
    const index = this.citas.findIndex(c => c.id_cita === cita.id_cita);
    if (index !== -1) {
      this.citas[index] = cita;
    }
    return of(cita);
  }

  deleteCita(id: number): Observable<boolean> {
    const index = this.citas.findIndex(c => c.id_cita === id);
    if (index !== -1) {
      this.citas.splice(index, 1);
      return of(true);
    }
    return of(false);
  }
}
