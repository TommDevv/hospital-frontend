import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportesRoutingModule } from './reportes-routing.module';
import { DashboardGeneralComponent } from './components/dashboard-general/dashboard-general.component';

@NgModule({
  declarations: [
    DashboardGeneralComponent
  ],
  imports: [
    CommonModule,
    ReportesRoutingModule
  ]
})
export class ReportesModule { }
