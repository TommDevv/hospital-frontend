import { Component, OnInit } from '@angular/core';
import { ReportesService } from '../../services/reportes.service';

@Component({
  selector: 'app-dashboard-general',
  templateUrl: './dashboard-general.component.html',
  styleUrls: ['./dashboard-general.component.css']
})
export class DashboardGeneralComponent implements OnInit {
  topEnfermedades: any[] = [];
  medicamentosRecetados: any[] = [];
  medicosTop: any[] = [];
  tiemposAtencion: any[] = [];
  pacientesPorSede: any[] = [];
  loading: boolean = true;

  constructor(private reportesService: ReportesService) {}

  ngOnInit(): void {
    this.loadReportes();
  }

  loadReportes(): void {
    this.loading = true;
    
    this.reportesService.getTopEnfermedades().subscribe(data => {
      this.topEnfermedades = data;
    });
    
    this.reportesService.getMedicamentosRecetados().subscribe(data => {
      this.medicamentosRecetados = data;
    });
    
    this.reportesService.getMedicosTopConsultas().subscribe(data => {
      this.medicosTop = data;
    });
    
    this.reportesService.getTiemposAtencion().subscribe(data => {
      this.tiemposAtencion = data;
    });
    
    this.reportesService.getPacientesPorSede().subscribe(data => {
      this.pacientesPorSede = data;
      this.loading = false;
    });
  }
}
