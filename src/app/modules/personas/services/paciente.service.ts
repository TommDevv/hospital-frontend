import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Paciente } from '../../../models/paciente.model';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  private pacientes: Paciente[] = [
    { cod_pac: 1, documento: '99887766' },
    { cod_pac: 2, documento: '55667788' },
    { cod_pac: 3, documento: '22334455' },
    { cod_pac: 4, documento: '66778899' }
  ];

  constructor() { }

  getPacientes(): Observable<Paciente[]> {
    return of(this.pacientes);
  }

  getPacienteById(id: number): Observable<Paciente | undefined> {
    return of(this.pacientes.find(p => p.cod_pac === id));
  }

  createPaciente(paciente: Paciente): Observable<Paciente> {
    const newPaciente = { ...paciente, cod_pac: this.pacientes.length + 1 };
    this.pacientes.push(newPaciente);
    return of(newPaciente);
  }

  updatePaciente(paciente: Paciente): Observable<Paciente> {
    const index = this.pacientes.findIndex(p => p.cod_pac === paciente.cod_pac);
    if (index !== -1) {
      this.pacientes[index] = paciente;
    }
    return of(paciente);
  }

  deletePaciente(id: number): Observable<boolean> {
    const index = this.pacientes.findIndex(p => p.cod_pac === id);
    if (index !== -1) {
      this.pacientes.splice(index, 1);
      return of(true);
    }
    return of(false);
  }
}
