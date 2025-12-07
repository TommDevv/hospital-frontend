import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SedesListComponent } from './components/sedes-list/sedes-list.component';
import { SedesDetailComponent } from './components/sedes-detail/sedes-detail.component';
import { SedeFormComponent } from './components/sede-form/sede-form.component';

const routes: Routes = [
  { path: '', component: SedesListComponent },
  { path: 'nueva', component: SedeFormComponent },
  { path: 'editar/:id', component: SedeFormComponent },
  { path: ':id', component: SedesDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SedesRoutingModule { }
