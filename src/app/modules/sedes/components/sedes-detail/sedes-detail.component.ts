import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SedeHospitalaria } from '../../../../models/sede.model';
import { SedeService } from '../../services/sede.service';
import { TelefonoSedeService } from '../../services/telefono-sede.service';
import { TelefonoSede } from '../../../../models/sede.model';

@Component({
  selector: 'app-sedes-detail',
  templateUrl: './sedes-detail.component.html',
  styleUrls: ['./sedes-detail.component.css']
})
export class SedesDetailComponent implements OnInit {
  sede?: SedeHospitalaria;
  telefonos: TelefonoSede[] = [];
  loading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sedeService: SedeService,
    private telefonoService: TelefonoSedeService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadSede(id);
    this.loadTelefonos(id);
  }

  loadSede(id: number): void {
    this.sedeService.getSedeById(id).subscribe({
      next: (data) => {
        this.sede = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.router.navigate(['/sedes']);
      }
    });
  }

  loadTelefonos(id: number): void {
    this.telefonoService.getTelefonosBySede(id).subscribe({
      next: (data) => {
        this.telefonos = data;
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/sedes']);
  }
}
