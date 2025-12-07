import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuditoriaAcceso } from '../../../models/auditoria.model';

@Injectable({
  providedIn: 'root'
})
export class AuditoriaService {
  private eventos: AuditoriaAcceso[] = [
    { id_evento: 1, id_emp: 1, accion: 'Consulta', tabla_afectada: 'Pacientes', fecha_evento: new Date('2024-12-06T08:30:00'), ip_origen: '192.168.1.10' },
    { id_evento: 2, id_emp: 2, accion: 'Modificación', tabla_afectada: 'Citas', fecha_evento: new Date('2024-12-06T09:15:00'), ip_origen: '192.168.1.15' },
    { id_evento: 3, id_emp: 1, accion: 'Eliminación', tabla_afectada: 'Medicamentos', fecha_evento: new Date('2024-12-06T10:00:00'), ip_origen: '192.168.1.10' },
    { id_evento: 4, id_emp: 3, accion: 'Consulta', tabla_afectada: 'Historias_Clinicas', fecha_evento: new Date('2024-12-06T11:30:00'), ip_origen: '192.168.1.20' }
  ];

  constructor() { }

  getEventos(): Observable<AuditoriaAcceso[]> {
    return of(this.eventos);
  }
}
