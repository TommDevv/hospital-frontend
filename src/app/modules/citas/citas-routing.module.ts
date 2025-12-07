import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitasListComponent } from './components/citas-list/citas-list.component';
import { CitaFormComponent } from './components/cita-form/cita-form.component';

const routes: Routes = [
  { path: '', component: CitasListComponent },
  { path: 'nueva', component: CitaFormComponent },
  { path: 'editar/:id', component: CitaFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitasRoutingModule { }
