import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuditoriaRoutingModule } from './auditoria-routing.module';
import { AuditoriaListComponent } from './components/auditoria-list/auditoria-list.component';

@NgModule({
  declarations: [
    AuditoriaListComponent
  ],
  imports: [
    CommonModule,
    AuditoriaRoutingModule
  ]
})
export class AuditoriaModule { }
