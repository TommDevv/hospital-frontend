import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipamientoListComponent } from './components/equipamiento-list/equipamiento-list.component';
import { EquipamientoFormComponent } from './components/equipamiento-form/equipamiento-form.component';

const routes: Routes = [
  { path: '', component: EquipamientoListComponent },
  { path: 'nuevo', component: EquipamientoFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipamientoRoutingModule { }
