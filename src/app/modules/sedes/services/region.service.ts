import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Region } from '../../../models/sede.model';

@Injectable({
  providedIn: 'root'
})
export class RegionService {
  private regiones: Region[] = [
    { region_id: 1, nombre: 'Región Andina' },
    { region_id: 2, nombre: 'Región Caribe' },
    { region_id: 3, nombre: 'Región Pacífica' },
    { region_id: 4, nombre: 'Región Orinoquía' },
    { region_id: 5, nombre: 'Región Amazonía' }
  ];

  constructor() { }

  getRegiones(): Observable<Region[]> {
    return of(this.regiones);
  }
}
