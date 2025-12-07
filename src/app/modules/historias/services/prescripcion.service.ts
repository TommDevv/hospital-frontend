import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Prescripcion } from '../../../models/prescripcion.model';

@Injectable({
  providedIn: 'root'
})
export class PrescripcionService {
  private prescripciones: Prescripcion[] = [
    { 
      id_presc: 1, 
      cod_hist: 1, 
      cod_med: 1, 
      dosis: '50mg', 
      frecuencia: 'Cada 12 horas', 
      duracion: '7 días',
      fecha_emision: new Date('2024-12-01')
    },
    { 
      id_presc: 2, 
      cod_hist: 2, 
      cod_med: 2, 
      dosis: '500mg', 
      frecuencia: 'Cada 8 horas', 
      duracion: '10 días',
      fecha_emision: new Date('2024-12-03')
    }
  ];

  constructor() { }

  getPrescripciones(): Observable<Prescripcion[]> {
    return of(this.prescripciones);
  }

  getPrescripcionesByHistoria(cod_hist: number): Observable<Prescripcion[]> {
    return of(this.prescripciones.filter(p => p.cod_hist === cod_hist));
  }

  createPrescripcion(prescripcion: Prescripcion): Observable<Prescripcion> {
    const newPresc = { ...prescripcion, id_presc: this.prescripciones.length + 1 };
    this.prescripciones.push(newPresc);
    return of(newPresc);
  }
}
