import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SedeHospitalaria, Region } from '../../../models/sede.model';

@Injectable({
  providedIn: 'root'
})
export class SedeService {
  private sedes: SedeHospitalaria[] = [
    { id_sede: 1, nom_sede: 'Hospital Central', ciudad: 'Bogotá', direccion: 'Calle 10 #15-20', region_id: 1 },
    { id_sede: 2, nom_sede: 'Clínica del Norte', ciudad: 'Medellín', direccion: 'Carrera 45 #32-10', region_id: 2 },
    { id_sede: 3, nom_sede: 'Hospital Sur', ciudad: 'Cali', direccion: 'Avenida 6 #28-50', region_id: 3 },
    { id_sede: 4, nom_sede: 'Centro Médico Oriente', ciudad: 'Bucaramanga', direccion: 'Calle 35 #20-15', region_id: 4 }
  ];

  constructor() { }

  getSedes(): Observable<SedeHospitalaria[]> {
    return of(this.sedes);
  }

  getSedeById(id: number): Observable<SedeHospitalaria | undefined> {
    return of(this.sedes.find(s => s.id_sede === id));
  }

  createSede(sede: SedeHospitalaria): Observable<SedeHospitalaria> {
    const newSede = { ...sede, id_sede: this.sedes.length + 1 };
    this.sedes.push(newSede);
    return of(newSede);
  }

  updateSede(sede: SedeHospitalaria): Observable<SedeHospitalaria> {
    const index = this.sedes.findIndex(s => s.id_sede === sede.id_sede);
    if (index !== -1) {
      this.sedes[index] = sede;
    }
    return of(sede);
  }

  deleteSede(id: number): Observable<boolean> {
    const index = this.sedes.findIndex(s => s.id_sede === id);
    if (index !== -1) {
      this.sedes.splice(index, 1);
      return of(true);
    }
    return of(false);
  }
}
