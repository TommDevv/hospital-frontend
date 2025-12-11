import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EquipamientoRoutingModule } from './equipamiento-routing.module';
import { EquipamientoListComponent } from './components/equipamiento-list/equipamiento-list.component';
import { EquipamientoFormComponent } from './components/equipamiento-form/equipamiento-form.component';

@NgModule({
  declarations: [
    EquipamientoListComponent,
    EquipamientoFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    EquipamientoRoutingModule
  ]
})
export class EquipamientoModule { }
