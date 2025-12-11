import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SedeHospitalaria, Region } from '../../../../models/sede.model';
import { SedeService } from '../../services/sede.service';
import { RegionService } from '../../services/region.service';

@Component({
  selector: 'app-sede-form',
  templateUrl: './sede-form.component.html',
  styleUrls: ['./sede-form.component.css']
})
export class SedeFormComponent implements OnInit {
  sede: SedeHospitalaria = {
    id_sede: 0,
    nom_sede: '',
    ciudad: '',
    region_id: 1
  };
  regiones: Region[] = [];
  isEditMode: boolean = false;
  loading: boolean = false;

  constructor(
    private sedeService: SedeService,
    private regionService: RegionService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadRegiones();
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.loadSede(Number(id));
    }
  }

  loadRegiones(): void {
    this.regionService.getRegiones().subscribe({
      next: (data) => {
        this.regiones = data;
      }
    });
  }

  loadSede(id: number): void {
    this.sedeService.getSedeById(id).subscribe({
      next: (data) => {
        if (data) {
          this.sede = data;
        }
      }
    });
  }

  onSubmit(): void {
    this.loading = true;
    if (this.isEditMode) {
      this.sedeService.updateSede(this.sede).subscribe({
        next: () => {
          this.loading = false;
          this.router.navigate(['/sedes']);
        },
        error: () => {
          this.loading = false;
        }
      });
    } else {
      this.sedeService.createSede(this.sede).subscribe({
        next: () => {
          this.loading = false;
          this.router.navigate(['/sedes']);
        },
        error: () => {
          this.loading = false;
        }
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/sedes']);
  }
}
