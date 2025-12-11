import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Empleado, Cargo, Rol } from '../../../../models/empleado.model';
import { Persona, TipoDocumento } from '../../../../models/persona.model';
import { SedeHospitalaria } from '../../../../models/sede.model';
import { EmpleadoService } from '../../services/empleado.service';
import { CargosService } from '../../services/cargos.service';
import { RolesService } from '../../services/roles.service';
import { DepartamentoService, Departamento } from '../../services/departamento.service';
import { TiposDocumentoService } from '../../services/tipos-documento.service';
import { SedeService } from '../../../sedes/services/sede.service';

@Component({
  selector: 'app-empleado-form',
  templateUrl: './empleado-form.component.html',
  styleUrls: ['./empleado-form.component.css']
})
export class EmpleadoFormComponent implements OnInit {
  persona: Persona = {
    documento: '',
    tipo_doc_id: 1,
    nombre: '',
    direccion: '',
    fecha_nac: new Date(),
    genero: 'M',
    correo: '',
    id_sede: 1
  };
  empleado: Empleado = {
    id_emp: 0,
    documento: '',
    id_dept: 1,
    cargo_id: 1,
    rol_id: 1,
    hash_contra: ''
  };
  cargos: Cargo[] = [];
  roles: Rol[] = [];
  departamentos: Departamento[] = [];
  tiposDocumento: TipoDocumento[] = [];
  sedes: SedeHospitalaria[] = [];
  isEditMode: boolean = false;
  loading: boolean = false;
  errorMessage: string = '';

  constructor(
    private empleadoService: EmpleadoService,
    private cargosService: CargosService,
    private rolesService: RolesService,
    private departamentoService: DepartamentoService,
    private tiposDocumentoService: TiposDocumentoService,
    private sedeService: SedeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadCargos();
    this.loadRoles();
    this.loadDepartamentos();
    this.loadTiposDocumento();
    this.loadSedes();
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

  loadTiposDocumento(): void {
    this.tiposDocumentoService.getTiposDocumento().subscribe({
      next: (data) => {
        this.tiposDocumento = data;
      }
    });
  }

  loadSedes(): void {
    this.sedeService.getSedes().subscribe({
      next: (data) => {
        this.sedes = data;
      }
    });
  }

  loadEmpleado(id: number): void {
    this.empleadoService.getEmpleadoById(id).subscribe({
      next: (data) => {
        if (data) {
          this.empleado = data;
          if (data.persona) {
            this.persona = {
              documento: data.persona.documento?.toString() || '',
              tipo_doc_id: data.persona.tipo_doc_id || 1,
              nombre: data.persona.nombre || '',
              direccion: data.persona.direccion || '',
              fecha_nac: data.persona.fecha_nac || new Date(),
              genero: data.persona.genero || 'M',
              correo: data.persona.correo || '',
              id_sede: data.persona.id_sede || 1
            };
          }
        }
      }
    });
  }

  onSubmit(): void {
    this.loading = true;
    this.errorMessage = '';
    
    if (this.isEditMode) {
      // PUT: Actualizar persona y empleado
      const updatePayload = {
        persona: {
          nombre: this.persona.nombre,
          direccion: this.persona.direccion,
          correo: this.persona.correo,
          id_sede: this.persona.id_sede
        },
        empleado: {
          cargo_id: this.empleado.cargo_id,
          rol_id: this.empleado.rol_id,
          id_dept: this.empleado.id_dept
        }
      };
      
      this.empleadoService.updateEmpleado(this.empleado.id_emp, updatePayload).subscribe({
        next: () => {
          this.loading = false;
          this.router.navigate(['/personas/empleados']);
        },
        error: (error) => {
          this.loading = false;
          this.errorMessage = 'Error al actualizar: ' + (error.error?.mensaje || JSON.stringify(error.error) || 'Error desconocido');
        }
      });
    } else {
      // POST: Crear persona + empleado
      const createPayload = {
        persona: {
          documento: parseInt(this.persona.documento),
          nombre: this.persona.nombre,
          correo: this.persona.correo,
          fecha_nac: this.formatDate(this.persona.fecha_nac),
          genero: this.persona.genero,
          direccion: this.persona.direccion,
          tipo_doc_id: this.persona.tipo_doc_id,
          id_sede: this.persona.id_sede
        },
        empleado: {
          id_dept: this.empleado.id_dept,
          cargo_id: this.empleado.cargo_id,
          rol_id: this.empleado.rol_id,
          hash_contra: this.empleado.hash_contra || '1234'
        }
      };
      
      this.empleadoService.createEmpleado(createPayload).subscribe({
        next: () => {
          this.loading = false;
          this.router.navigate(['/personas/empleados']);
        },
        error: (error) => {
          this.loading = false;
          this.errorMessage = 'Error al crear: ' + (error.error?.mensaje || JSON.stringify(error.error) || 'Error desconocido');
        }
      });
    }
  }

  formatDate(date: any): string {
    if (typeof date === 'string') return date;
    const d = new Date(date);
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${d.getFullYear()}-${month}-${day}`;
  }

  cancel(): void {
    this.router.navigate(['/personas/empleados']);
  }
}
