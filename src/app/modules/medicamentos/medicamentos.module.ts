import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MedicamentosRoutingModule } from './medicamentos-routing.module';
import { MedicamentosListComponent } from './components/medicamentos-list/medicamentos-list.component';
import { StockListComponent } from './components/stock-list/stock-list.component';

@NgModule({
  declarations: [
    MedicamentosListComponent,
    StockListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MedicamentosRoutingModule
  ]
})
export class MedicamentosModule { }
