import { Component, OnInit } from '@angular/core';
import { Paciente } from '../../../../models/paciente.model';
import { PacienteService } from '../../services/paciente.service';

@Component({
  selector: 'app-pacientes-list',
  templateUrl: './pacientes-list.component.html',
  styleUrls: ['./pacientes-list.component.css']
})
export class PacientesListComponent implements OnInit {
  pacientes: Paciente[] = [];
  loading: boolean = true;

  constructor(private pacienteService: PacienteService) {}

  ngOnInit(): void {
    this.loadPacientes();
  }

  loadPacientes(): void {
    this.loading = true;
    this.pacienteService.getPacientes().subscribe({
      next: (data) => {
        this.pacientes = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  deletePaciente(id: number): void {
    if (confirm('¿Está seguro que desea eliminar este paciente?')) {
      this.pacienteService.deletePaciente(id).subscribe({
        next: () => {
          this.loadPacientes();
        }
      });
    }
  }
}
