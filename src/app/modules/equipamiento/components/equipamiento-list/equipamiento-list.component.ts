import { Component, OnInit } from '@angular/core';
import { Equipamiento } from '../../../../models/equipamiento.model';
import { EquipamientoService } from '../../services/equipamiento.service';

@Component({
  selector: 'app-equipamiento-list',
  templateUrl: './equipamiento-list.component.html',
  styleUrls: ['./equipamiento-list.component.css']
})
export class EquipamientoListComponent implements OnInit {
  equipamiento: Equipamiento[] = [];
  loading: boolean = true;

  constructor(private equipamientoService: EquipamientoService) {}

  ngOnInit(): void {
    this.loadEquipamiento();
  }

  loadEquipamiento(): void {
    this.loading = true;
    this.equipamientoService.getEquipamiento().subscribe({
      next: (data) => {
        this.equipamiento = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  getEstadoClass(estado: string): string {
    switch (estado) {
      case 'Operativo': return 'success';
      case 'En Mantenimiento': return 'warning';
      case 'Fuera de Servicio': return 'danger';
      default: return 'secondary';
    }
  }
}
