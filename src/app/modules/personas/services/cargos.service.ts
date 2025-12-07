import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cargo } from '../../../models/empleado.model';

@Injectable({
  providedIn: 'root'
})
export class CargosService {
  private cargos: Cargo[] = [
    { cargo_id: 1, cargo_nombre: 'Director' },
    { cargo_id: 2, cargo_nombre: 'Médico General' },
    { cargo_id: 3, cargo_nombre: 'Enfermero Jefe' },
    { cargo_id: 4, cargo_nombre: 'Auxiliar Administrativo' },
    { cargo_id: 5, cargo_nombre: 'Especialista' }
  ];

  constructor() { }

  getCargos(): Observable<Cargo[]> {
    return of(this.cargos);
  }
}
