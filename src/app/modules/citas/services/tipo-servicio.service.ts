import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TipoServicio } from '../../../models/cita.model';

@Injectable({
  providedIn: 'root'
})
export class TipoServicioService {
  private tiposServicio: TipoServicio[] = [
    { cod_servicio: 1, nombre: 'Consulta General' },
    { cod_servicio: 2, nombre: 'Urgencias' },
    { cod_servicio: 3, nombre: 'Especialista' },
    { cod_servicio: 4, nombre: 'Control' },
    { cod_servicio: 5, nombre: 'Exámenes' }
  ];

  constructor() { }

  getTiposServicio(): Observable<TipoServicio[]> {
    return of(this.tiposServicio);
  }
}
