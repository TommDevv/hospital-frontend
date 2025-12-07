import { Component, OnInit } from '@angular/core';
import { Medicamento } from '../../../../models/medicamento.model';
import { MedicamentoService } from '../../services/medicamento.service';

@Component({
  selector: 'app-medicamentos-list',
  templateUrl: './medicamentos-list.component.html',
  styleUrls: ['./medicamentos-list.component.css']
})
export class MedicamentosListComponent implements OnInit {
  medicamentos: Medicamento[] = [];
  loading: boolean = true;

  constructor(private medicamentoService: MedicamentoService) {}

  ngOnInit(): void {
    this.loadMedicamentos();
  }

  loadMedicamentos(): void {
    this.loading = true;
    this.medicamentoService.getMedicamentos().subscribe({
      next: (data) => {
        this.medicamentos = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
}
