import { Component, OnInit } from '@angular/core';
import { HistoriaClinica } from '../../../../models/historia-clinica.model';
import { HistoriaService } from '../../services/historia.service';

@Component({
  selector: 'app-historias-list',
  templateUrl: './historias-list.component.html',
  styleUrls: ['./historias-list.component.css']
})
export class HistoriasListComponent implements OnInit {
  historias: HistoriaClinica[] = [];
  loading: boolean = true;

  constructor(private historiaService: HistoriaService) {}

  ngOnInit(): void {
    this.loadHistorias();
  }

  loadHistorias(): void {
    this.loading = true;
    this.historiaService.getHistorias().subscribe({
      next: (data) => {
        this.historias = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
}
