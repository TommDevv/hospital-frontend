import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TelefonoSede } from '../../../models/sede.model';

@Injectable({
  providedIn: 'root'
})
export class TelefonoSedeService {
  private telefonos: TelefonoSede[] = [
    { id_sede: 1, numero: '601-2345678' },
    { id_sede: 1, numero: '601-2345679' },
    { id_sede: 2, numero: '604-3456789' },
    { id_sede: 3, numero: '602-4567890' },
    { id_sede: 4, numero: '607-5678901' }
  ];

  constructor() { }

  getTelefonosBySede(id_sede: number): Observable<TelefonoSede[]> {
    return of(this.telefonos.filter(t => t.id_sede === id_sede));
  }

  addTelefono(telefono: TelefonoSede): Observable<TelefonoSede> {
    this.telefonos.push(telefono);
    return of(telefono);
  }

  deleteTelefono(id_sede: number, numero: string): Observable<boolean> {
    const index = this.telefonos.findIndex(t => t.id_sede === id_sede && t.numero === numero);
    if (index !== -1) {
      this.telefonos.splice(index, 1);
      return of(true);
    }
    return of(false);
  }
}
