import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Empleado, Cargo, Rol } from '../../../models/empleado.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private empleados: Empleado[] = [
    { id_emp: 1, documento: '12345678', id_dept: 1, cargo_id: 1, rol_id: 1 },
    { id_emp: 2, documento: '87654321', id_dept: 2, cargo_id: 2, rol_id: 2 },
    { id_emp: 3, documento: '11223344', id_dept: 3, cargo_id: 3, rol_id: 3 },
    { id_emp: 4, documento: '44332211', id_dept: 1, cargo_id: 4, rol_id: 4 }
  ];

  constructor() { }

  getEmpleados(): Observable<Empleado[]> {
    return of(this.empleados);
  }

  getEmpleadoById(id: number): Observable<Empleado | undefined> {
    return of(this.empleados.find(e => e.id_emp === id));
  }

  createEmpleado(empleado: Empleado): Observable<Empleado> {
    const newEmpleado = { ...empleado, id_emp: this.empleados.length + 1 };
    this.empleados.push(newEmpleado);
    return of(newEmpleado);
  }

  updateEmpleado(empleado: Empleado): Observable<Empleado> {
    const index = this.empleados.findIndex(e => e.id_emp === empleado.id_emp);
    if (index !== -1) {
      this.empleados[index] = empleado;
    }
    return of(empleado);
  }

  deleteEmpleado(id: number): Observable<boolean> {
    const index = this.empleados.findIndex(e => e.id_emp === id);
    if (index !== -1) {
      this.empleados.splice(index, 1);
      return of(true);
    }
    return of(false);
  }
}
