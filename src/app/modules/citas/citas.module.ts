import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CitasRoutingModule } from './citas-routing.module';
import { CitasListComponent } from './components/citas-list/citas-list.component';
import { CitaFormComponent } from './components/cita-form/cita-form.component';

@NgModule({
  declarations: [
    CitasListComponent,
    CitaFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CitasRoutingModule
  ]
})
export class CitasModule { }
