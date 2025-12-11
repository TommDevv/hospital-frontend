import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicamentosListComponent } from './components/medicamentos-list/medicamentos-list.component';
import { StockListComponent } from './components/stock-list/stock-list.component';
import { MedicamentoFormComponent } from './components/medicamento-form/medicamento-form.component';

const routes: Routes = [
  { path: '', component: MedicamentosListComponent },
  { path: 'nuevo', component: MedicamentoFormComponent },
  { path: 'stock', component: StockListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicamentosRoutingModule { }
