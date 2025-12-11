import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Paciente } from '../../../../models/paciente.model';
import { Persona, TipoDocumento } from '../../../../models/persona.model';
import { SedeHospitalaria } from '../../../../models/sede.model';
import { PacienteService } from '../../services/paciente.service';
import { TiposDocumentoService } from '../../services/tipos-documento.service';
import { SedeService } from '../../../sedes/services/sede.service';

@Component({
  selector: 'app-paciente-form',
  templateUrl: './paciente-form.component.html',
  styleUrls: ['./paciente-form.component.css']
})
export class PacienteFormComponent implements OnInit {
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
  paciente: Paciente = {
    cod_pac: 0,
    documento: ''
  };
  tiposDocumento: TipoDocumento[] = [];
  sedes: SedeHospitalaria[] = [];
  isEditMode: boolean = false;
  loading: boolean = false;
  errorMessage: string = '';

  constructor(
    private pacienteService: PacienteService,
    private tiposDocumentoService: TiposDocumentoService,
    private sedeService: SedeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadTiposDocumento();
    this.loadSedes();
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.loadPaciente(Number(id));
    }
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

  loadPaciente(id: number): void {
    this.pacienteService.getPacienteById(id).subscribe({
      next: (data) => {
        if (data) {
          this.paciente = data;
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
      // PUT: Actualizar datos de persona del paciente
      const updatePayload = {
        nombre: this.persona.nombre,
        direccion: this.persona.direccion,
        correo: this.persona.correo,
        fecha_nac: this.formatDate(this.persona.fecha_nac),
        genero: this.persona.genero
      };
      
      this.pacienteService.updatePaciente(this.paciente.cod_pac, updatePayload).subscribe({
        next: () => {
          this.loading = false;
          this.router.navigate(['/personas/pacientes']);
        },
        error: (error) => {
          this.loading = false;
          this.errorMessage = 'Error al actualizar: ' + (error.error?.mensaje || JSON.stringify(error.error) || 'Error desconocido');
        }
      });
    } else {
      // POST: Crear persona + paciente
      const createPayload = {
        persona: {
          documento: parseInt(this.persona.documento),
          nombre: this.persona.nombre,
          fecha_nac: this.formatDate(this.persona.fecha_nac),
          genero: this.persona.genero,
          direccion: this.persona.direccion,
          correo: this.persona.correo,
          tipo_doc_id: this.persona.tipo_doc_id,
          id_sede: this.persona.id_sede
        }
      };
      
      this.pacienteService.createPaciente(createPayload).subscribe({
        next: () => {
          this.loading = false;
          this.router.navigate(['/personas/pacientes']);
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
    this.router.navigate(['/personas/pacientes']);
  }
}
