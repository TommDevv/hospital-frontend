import { Component, OnInit } from '@angular/core';
import { SedeHospitalaria } from '../../../../models/sede.model';
import { SedeService } from '../../services/sede.service';

@Component({
  selector: 'app-sedes-list',
  templateUrl: './sedes-list.component.html',
  styleUrls: ['./sedes-list.component.css']
})
export class SedesListComponent implements OnInit {
  sedes: SedeHospitalaria[] = [];
  loading: boolean = true;

  constructor(private sedeService: SedeService) {}

  ngOnInit(): void {
    this.loadSedes();
  }

  loadSedes(): void {
    this.loading = true;
    this.sedeService.getSedes().subscribe({
      next: (data) => {
        this.sedes = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  deleteSede(id: number): void {
    if (confirm('¿Está seguro que desea eliminar esta sede?')) {
      this.sedeService.deleteSede(id).subscribe({
        next: () => {
          this.loadSedes();
        }
      });
    }
  }
}
