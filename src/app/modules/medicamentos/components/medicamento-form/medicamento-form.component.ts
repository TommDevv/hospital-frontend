import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medicamento, Proveedor } from '../../../../models/medicamento.model';
import { MedicamentoService } from '../../services/medicamento.service';
import { ProveedorService } from '../../services/proveedor.service';

@Component({
  selector: 'app-medicamento-form',
  templateUrl: './medicamento-form.component.html',
  styleUrls: ['./medicamento-form.component.css']
})
export class MedicamentoFormComponent implements OnInit {
  medicamento: Medicamento = {
    cod_med: 0,
    nom_med: '',
    descripcion: '',
    unidad: '',
    proveedor_id: 0
  };
  proveedores: Proveedor[] = [];
  loading = false;
  errorMessage = '';

  constructor(
    private medicamentoService: MedicamentoService,
    private proveedorService: ProveedorService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadProveedores();
  }

  loadProveedores(): void {
    this.proveedorService.getProveedores().subscribe({
      next: (data) => {
        this.proveedores = data;
      },
      error: (error) => {
        this.errorMessage = 'Error al cargar proveedores';
      }
    });
  }

  onSubmit(): void {
    if (!this.medicamento.nom_med || !this.medicamento.unidad) {
      this.errorMessage = 'Complete los campos obligatorios';
      return;
    }

    this.loading = true;
    this.errorMessage = '';

    this.medicamentoService.createMedicamento(this.medicamento).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/medicamentos']);
      },
      error: (error) => {
        this.loading = false;
        this.errorMessage = 'Error al crear el medicamento: ' + (error.message || 'Error desconocido');
      }
    });
  }

  onCancel(): void {
    this.router.navigate(['/medicamentos']);
  }
}
