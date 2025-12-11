import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Equipamiento } from '../../../../models/equipamiento.model';
import { EquipamientoService } from '../../services/equipamiento.service';
import { DepartamentoService, Departamento } from '../../../personas/services/departamento.service';

@Component({
  selector: 'app-equipamiento-form',
  templateUrl: './equipamiento-form.component.html',
  styleUrls: ['./equipamiento-form.component.css']
})
export class EquipamientoFormComponent implements OnInit {
  equipamiento: Equipamiento = {
    cod_eq: 0,
    nom_eq: '',
    id_dept: 0,
    estado: 'Operativo',
    fecha_mantenimiento: new Date(),
    responsable: 0
  };
  departamentos: Departamento[] = [];
  loading = false;
  errorMessage = '';

  constructor(
    private equipamientoService: EquipamientoService,
    private departamentoService: DepartamentoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadDepartamentos();
  }

  loadDepartamentos(): void {
    this.departamentoService.getDepartamentos().subscribe({
      next: (data) => {
        this.departamentos = data;
      },
      error: (error) => {
        this.errorMessage = 'Error al cargar departamentos';
      }
    });
  }

  onSubmit(): void {
    if (!this.equipamiento.nom_eq || !this.equipamiento.id_dept || !this.equipamiento.responsable) {
      this.errorMessage = 'Complete los campos obligatorios';
      return;
    }

    this.loading = true;
    this.errorMessage = '';

    // Mapear a los campos que espera el backend
    const payload = {
      nom_eq: this.equipamiento.nom_eq,
      id_dept_id: this.equipamiento.id_dept,
      estado: this.equipamiento.estado,
      fecha_mantenimiento: this.formatDate(this.equipamiento.fecha_mantenimiento),
      responsable_id: this.equipamiento.responsable
    };

    this.equipamientoService.createEquipamiento(payload as any).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/equipamiento']);
      },
      error: (error) => {
        this.loading = false;
        this.errorMessage = 'Error al crear el equipamiento: ' + (error.error ? JSON.stringify(error.error) : error.message || 'Error desconocido');
      }
    });
  }

  formatDate(date: any): string {
    if (typeof date === 'string') return date;
    const d = new Date(date);
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${d.getFullYear()}-${month}-${day}`;
  }

  onCancel(): void {
    this.router.navigate(['/equipamiento']);
  }
}
