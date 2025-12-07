import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HistoriaClinica } from '../../../../models/historia-clinica.model';
import { HistoriaService } from '../../services/historia.service';

@Component({
  selector: 'app-historia-form',
  templateUrl: './historia-form.component.html',
  styleUrls: ['./historia-form.component.css']
})
export class HistoriaFormComponent implements OnInit {
  historia: HistoriaClinica = {
    cod_hist: 0,
    fecha_registro_hora: new Date(),
    diagnostico: '',
    cod_pac: 1,
    id_emp: 1
  };
  loading: boolean = false;

  constructor(
    private historiaService: HistoriaService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.loading = true;
    this.historiaService.createHistoria(this.historia).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/historias']);
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/historias']);
  }
}
