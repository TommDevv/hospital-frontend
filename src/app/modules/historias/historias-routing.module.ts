import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoriasListComponent } from './components/historias-list/historias-list.component';
import { HistoriaFormComponent } from './components/historia-form/historia-form.component';

const routes: Routes = [
  { path: '', component: HistoriasListComponent },
  { path: 'nueva', component: HistoriaFormComponent }
  ,{ path: ':id', component: HistoriaFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoriasRoutingModule { }
