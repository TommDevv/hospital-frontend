import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HistoriaClinica } from '../../../models/historia-clinica.model';

@Injectable({
  providedIn: 'root'
})
export class HistoriaService {
  private historias: HistoriaClinica[] = [
    { 
      cod_hist: 1, 
      fecha_registro_hora: new Date('2024-12-01T10:30:00'), 
      diagnostico: 'Hipertensión arterial controlada',
      cod_pac: 1,
      id_emp: 2
    },
    { 
      cod_hist: 2, 
      fecha_registro_hora: new Date('2024-12-03T15:00:00'), 
      diagnostico: 'Diabetes tipo 2',
      cod_pac: 2,
      id_emp: 2
    },
    { 
      cod_hist: 3, 
      fecha_registro_hora: new Date('2024-12-05T09:00:00'), 
      diagnostico: 'Gripe estacional',
      cod_pac: 3,
      id_emp: 5
    }
  ];

  constructor() { }

  getHistorias(): Observable<HistoriaClinica[]> {
    return of(this.historias);
  }

  getHistoriaById(id: number): Observable<HistoriaClinica | undefined> {
    return of(this.historias.find(h => h.cod_hist === id));
  }

  createHistoria(historia: HistoriaClinica): Observable<HistoriaClinica> {
    const newHistoria = { ...historia, cod_hist: this.historias.length + 1 };
    this.historias.push(newHistoria);
    return of(newHistoria);
  }
}
