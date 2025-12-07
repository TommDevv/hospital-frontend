import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Cita, TipoServicio, EstadoCita } from '../../../../models/cita.model';
import { CitasService } from '../../services/citas.service';
import { TipoServicioService } from '../../services/tipo-servicio.service';

@Component({
  selector: 'app-cita-form',
  templateUrl: './cita-form.component.html',
  styleUrls: ['./cita-form.component.css']
})
export class CitaFormComponent implements OnInit {
  cita: Cita = {
    id_cita: 0,
    cod_pac: 1,
    id_emp: 1,
    fecha_hora: new Date(),
    cod_servicio: 1,
    estado: 'tomada'
  };
  tiposServicio: TipoServicio[] = [];
  estadosDisponibles: EstadoCita[] = ['aplazada', 'tomada', 'en desarrollo'];
  isEditMode: boolean = false;
  loading: boolean = false;

  constructor(
    private citasService: CitasService,
    private tipoServicioService: TipoServicioService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadTiposServicio();
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.loadCita(Number(id));
    }
  }

  loadTiposServicio(): void {
    this.tipoServicioService.getTiposServicio().subscribe({
      next: (data) => {
        this.tiposServicio = data;
      }
    });
  }

  loadCita(id: number): void {
    this.citasService.getCitaById(id).subscribe({
      next: (data) => {
        if (data) {
          this.cita = data;
        }
      }
    });
  }

  onSubmit(): void {
    this.loading = true;
    if (this.isEditMode) {
      this.citasService.updateCita(this.cita).subscribe({
        next: () => {
          this.loading = false;
          this.router.navigate(['/citas']);
        },
        error: () => {
          this.loading = false;
        }
      });
    } else {
      this.citasService.createCita(this.cita).subscribe({
        next: () => {
          this.loading = false;
          this.router.navigate(['/citas']);
        },
        error: () => {
          this.loading = false;
        }
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/citas']);
  }
}
