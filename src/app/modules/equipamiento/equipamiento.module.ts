import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipamientoRoutingModule } from './equipamiento-routing.module';
import { EquipamientoListComponent } from './components/equipamiento-list/equipamiento-list.component';

@NgModule({
  declarations: [
    EquipamientoListComponent
  ],
  imports: [
    CommonModule,
    EquipamientoRoutingModule
  ]
})
export class EquipamientoModule { }
