import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {
  constructor() { }

  getTopEnfermedades(): Observable<any[]> {
    return of([
      { enfermedad: 'Hipertensión', casos: 145, sede: 'Hospital Central' },
      { enfermedad: 'Diabetes', casos: 120, sede: 'Clínica del Norte' },
      { enfermedad: 'Gripe', casos: 98, sede: 'Hospital Sur' },
      { enfermedad: 'Asma', casos: 76, sede: 'Hospital Central' },
      { enfermedad: 'Artritis', casos: 54, sede: 'Centro Médico Oriente' }
    ]);
  }

  getMedicamentosRecetados(): Observable<any[]> {
    return of([
      { medicamento: 'Ibuprofeno', cantidad: 450, mes: 'Diciembre' },
      { medicamento: 'Amoxicilina', cantidad: 380, mes: 'Diciembre' },
      { medicamento: 'Paracetamol', cantidad: 340, mes: 'Diciembre' },
      { medicamento: 'Losartán', cantidad: 280, mes: 'Diciembre' },
      { medicamento: 'Metformina', cantidad: 220, mes: 'Diciembre' }
    ]);
  }

  getMedicosTopConsultas(): Observable<any[]> {
    return of([
      { medico: 'Dr. Juan Pérez', consultas: 85, semana: 'Semana 49' },
      { medico: 'Dra. María García', consultas: 78, semana: 'Semana 49' },
      { medico: 'Dr. Carlos López', consultas: 65, semana: 'Semana 49' },
      { medico: 'Dra. Ana Torres', consultas: 58, semana: 'Semana 49' },
      { medico: 'Dr. Luis Martínez', consultas: 52, semana: 'Semana 49' }
    ]);
  }

  getTiemposAtencion(): Observable<any[]> {
    return of([
      { sede: 'Hospital Central', tiempo_promedio: '25 min' },
      { sede: 'Clínica del Norte', tiempo_promedio: '30 min' },
      { sede: 'Hospital Sur', tiempo_promedio: '22 min' },
      { sede: 'Centro Médico Oriente', tiempo_promedio: '28 min' }
    ]);
  }

  getPacientesPorSede(): Observable<any[]> {
    return of([
      { sede: 'Hospital Central', total_pacientes: 1250 },
      { sede: 'Clínica del Norte', total_pacientes: 980 },
      { sede: 'Hospital Sur', total_pacientes: 1100 },
      { sede: 'Centro Médico Oriente', total_pacientes: 750 }
    ]);
  }
}
