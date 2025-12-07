import { Component, OnInit } from '@angular/core';
import { AuditoriaAcceso } from '../../../../models/auditoria.model';
import { AuditoriaService } from '../../services/auditoria.service';

@Component({
  selector: 'app-auditoria-list',
  templateUrl: './auditoria-list.component.html',
  styleUrls: ['./auditoria-list.component.css']
})
export class AuditoriaListComponent implements OnInit {
  eventos: AuditoriaAcceso[] = [];
  loading: boolean = true;

  constructor(private auditoriaService: AuditoriaService) {}

  ngOnInit(): void {
    this.loadEventos();
  }

  loadEventos(): void {
    this.loading = true;
    this.auditoriaService.getEventos().subscribe({
      next: (data) => {
        this.eventos = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  getAccionClass(accion: string): string {
    switch (accion) {
      case 'Consulta': return 'info';
      case 'Modificación': return 'warning';
      case 'Eliminación': return 'danger';
      default: return 'secondary';
    }
  }
}
