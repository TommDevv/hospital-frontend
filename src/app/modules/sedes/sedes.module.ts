import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SedesRoutingModule } from './sedes-routing.module';
import { SedesListComponent } from './components/sedes-list/sedes-list.component';
import { SedesDetailComponent } from './components/sedes-detail/sedes-detail.component';
import { SedeFormComponent } from './components/sede-form/sede-form.component';

@NgModule({
  declarations: [
    SedesListComponent,
    SedesDetailComponent,
    SedeFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SedesRoutingModule
  ]
})
export class SedesModule { }
