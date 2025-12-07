import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipamientoListComponent } from './components/equipamiento-list/equipamiento-list.component';

const routes: Routes = [
  { path: '', component: EquipamientoListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipamientoRoutingModule { }
