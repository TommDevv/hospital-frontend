import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  isViewMode: boolean = false;

  constructor(
    private historiaService: HistoriaService,
    private router: Router
    ,private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isViewMode = true;
      this.loadHistoria(Number(id));
    }
  }

  loadHistoria(id: number): void {
    this.loading = true;
    this.historiaService.getHistoriaById(id).subscribe({
      next: (data) => {
        if (data) {
          this.historia = data;
        }
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

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
