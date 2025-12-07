import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Paciente } from '../../../../models/paciente.model';
import { PacienteService } from '../../services/paciente.service';

@Component({
  selector: 'app-paciente-form',
  templateUrl: './paciente-form.component.html',
  styleUrls: ['./paciente-form.component.css']
})
export class PacienteFormComponent implements OnInit {
  paciente: Paciente = {
    cod_pac: 0,
    documento: ''
  };
  isEditMode: boolean = false;
  loading: boolean = false;

  constructor(
    private pacienteService: PacienteService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.loadPaciente(Number(id));
    }
  }

  loadPaciente(id: number): void {
    this.pacienteService.getPacienteById(id).subscribe({
      next: (data) => {
        if (data) {
          this.paciente = data;
        }
      }
    });
  }

  onSubmit(): void {
    this.loading = true;
    if (this.isEditMode) {
      this.pacienteService.updatePaciente(this.paciente).subscribe({
        next: () => {
          this.loading = false;
          this.router.navigate(['/personas/pacientes']);
        },
        error: () => {
          this.loading = false;
        }
      });
    } else {
      this.pacienteService.createPaciente(this.paciente).subscribe({
        next: () => {
          this.loading = false;
          this.router.navigate(['/personas/pacientes']);
        },
        error: () => {
          this.loading = false;
        }
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/personas/pacientes']);
  }
}
