import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Medicamento, Stock } from '../../../models/medicamento.model';

@Injectable({
  providedIn: 'root'
})
export class MedicamentoService {
  private medicamentos: Medicamento[] = [
    { cod_med: 1, nom_med: 'Ibuprofeno', descripcion: 'Antiinflamatorio', unidad: 'Tableta', proveedor_id: 1 },
    { cod_med: 2, nom_med: 'Amoxicilina', descripcion: 'Antibiótico', unidad: 'Cápsula', proveedor_id: 2 },
    { cod_med: 3, nom_med: 'Paracetamol', descripcion: 'Analgésico', unidad: 'Tableta', proveedor_id: 1 },
    { cod_med: 4, nom_med: 'Losartán', descripcion: 'Antihipertensivo', unidad: 'Tableta', proveedor_id: 3 }
  ];

  private stock: Stock[] = [
    { cod_med: 1, id_sede: 1, cantidad: 500 },
    { cod_med: 2, id_sede: 1, cantidad: 300 },
    { cod_med: 3, id_sede: 2, cantidad: 750 },
    { cod_med: 4, id_sede: 1, cantidad: 200 }
  ];

  constructor() { }

  getMedicamentos(): Observable<Medicamento[]> {
    return of(this.medicamentos);
  }

  getStock(): Observable<Stock[]> {
    return of(this.stock);
  }

  createMedicamento(medicamento: Medicamento): Observable<Medicamento> {
    const newMed = { ...medicamento, cod_med: this.medicamentos.length + 1 };
    this.medicamentos.push(newMed);
    return of(newMed);
  }
}
