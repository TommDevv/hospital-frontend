import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Empleado, Cargo, Rol } from '../../../../models/empleado.model';
import { EmpleadoService } from '../../services/empleado.service';
import { CargosService } from '../../services/cargos.service';
import { RolesService } from '../../services/roles.service';
import { DepartamentoService, Departamento } from '../../services/departamento.service';

@Component({
  selector: 'app-empleado-form',
  templateUrl: './empleado-form.component.html',
  styleUrls: ['./empleado-form.component.css']
})
export class EmpleadoFormComponent implements OnInit {
  empleado: Empleado = {
    id_emp: 0,
    documento: '',
    id_dept: 1,
    cargo_id: 1,
    rol_id: 1
  };
  cargos: Cargo[] = [];
  roles: Rol[] = [];
  departamentos: Departamento[] = [];
  isEditMode: boolean = false;
  loading: boolean = false;

  constructor(
    private empleadoService: EmpleadoService,
    private cargosService: CargosService,
    private rolesService: RolesService,
    private departamentoService: DepartamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadCargos();
    this.loadRoles();
    this.loadDepartamentos();
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.loadEmpleado(Number(id));
    }
  }

  loadCargos(): void {
    this.cargosService.getCargos().subscribe({
      next: (data) => {
        this.cargos = data;
      }
    });
  }

  loadRoles(): void {
    this.rolesService.getRoles().subscribe({
      next: (data) => {
        this.roles = data;
      }
    });
  }

  loadDepartamentos(): void {
    this.departamentoService.getDepartamentos().subscribe({
      next: (data) => {
        this.departamentos = data;
      }
    });
  }

  loadEmpleado(id: number): void {
    this.empleadoService.getEmpleadoById(id).subscribe({
      next: (data) => {
        if (data) {
          this.empleado = data;
        }
      }
    });
  }

  onSubmit(): void {
    this.loading = true;
    if (this.isEditMode) {
      this.empleadoService.updateEmpleado(this.empleado).subscribe({
        next: () => {
          this.loading = false;
          this.router.navigate(['/personas/empleados']);
        },
        error: () => {
          this.loading = false;
        }
      });
    } else {
      this.empleadoService.createEmpleado(this.empleado).subscribe({
        next: () => {
          this.loading = false;
          this.router.navigate(['/personas/empleados']);
        },
        error: () => {
          this.loading = false;
        }
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/personas/empleados']);
  }
}
