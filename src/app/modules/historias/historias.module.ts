import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HistoriasRoutingModule } from './historias-routing.module';
import { HistoriasListComponent } from './components/historias-list/historias-list.component';
import { HistoriaFormComponent } from './components/historia-form/historia-form.component';

@NgModule({
  declarations: [
    HistoriasListComponent,
    HistoriaFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HistoriasRoutingModule
  ]
})
export class HistoriasModule { }
