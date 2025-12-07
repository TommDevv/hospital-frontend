import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Rol } from '../../../models/empleado.model';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  private roles: Rol[] = [
    { rol_id: 1, rol_nombre: 'Administrador' },
    { rol_id: 2, rol_nombre: 'Médico' },
    { rol_id: 3, rol_nombre: 'Enfermero' },
    { rol_id: 4, rol_nombre: 'Administrativo' }
  ];

  constructor() { }

  getRoles(): Observable<Rol[]> {
    return of(this.roles);
  }
}
