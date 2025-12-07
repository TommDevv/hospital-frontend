import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Equipamiento } from '../../../models/equipamiento.model';

@Injectable({
  providedIn: 'root'
})
export class EquipamientoService {
  private equipamiento: Equipamiento[] = [
    { cod_eq: 1, nom_eq: 'Rayos X Digital', id_dept: 1, estado: 'Operativo', fecha_mantenimiento: new Date('2024-11-15'), responsable: 1 },
    { cod_eq: 2, nom_eq: 'Ecógrafo', id_dept: 2, estado: 'Operativo', fecha_mantenimiento: new Date('2024-12-01'), responsable: 2 },
    { cod_eq: 3, nom_eq: 'Monitor de Signos Vitales', id_dept: 3, estado: 'En Mantenimiento', fecha_mantenimiento: new Date('2024-12-10'), responsable: 3 },
    { cod_eq: 4, nom_eq: 'Desfibrilador', id_dept: 1, estado: 'Operativo', fecha_mantenimiento: new Date('2024-10-20'), responsable: 1 }
  ];

  constructor() { }

  getEquipamiento(): Observable<Equipamiento[]> {
    return of(this.equipamiento);
  }
}
