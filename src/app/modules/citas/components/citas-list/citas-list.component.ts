import { Component, OnInit } from '@angular/core';
import { Cita, EstadoCita } from '../../../../models/cita.model';
import { CitasService } from '../../services/citas.service';

@Component({
  selector: 'app-citas-list',
  templateUrl: './citas-list.component.html',
  styleUrls: ['./citas-list.component.css']
})
export class CitasListComponent implements OnInit {
  citas: Cita[] = [];
  loading: boolean = true;

  constructor(private citasService: CitasService) {}

  ngOnInit(): void {
    this.loadCitas();
  }

  loadCitas(): void {
    this.loading = true;
    this.citasService.getCitas().subscribe({
      next: (data) => {
        this.citas = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  deleteCita(id: number): void {
    if (confirm('¿Está seguro que desea eliminar esta cita?')) {
      this.citasService.deleteCita(id).subscribe({
        next: () => {
          this.loadCitas();
        }
      });
    }
  }

  getEstadoClass(estado: EstadoCita): string {
    switch (estado) {
      case 'tomada': return 'success';
      case 'en desarrollo': return 'warning';
      case 'aplazada': return 'danger';
      default: return 'secondary';
    }
  }
}
