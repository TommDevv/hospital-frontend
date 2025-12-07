import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PersonasRoutingModule } from './personas-routing.module';
import { EmpleadosListComponent } from './components/empleados-list/empleados-list.component';
import { EmpleadoFormComponent } from './components/empleado-form/empleado-form.component';
import { PacientesListComponent } from './components/pacientes-list/pacientes-list.component';
import { PacienteFormComponent } from './components/paciente-form/paciente-form.component';

@NgModule({
  declarations: [
    EmpleadosListComponent,
    EmpleadoFormComponent,
    PacientesListComponent,
    PacienteFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PersonasRoutingModule
  ]
})
export class PersonasModule { }
