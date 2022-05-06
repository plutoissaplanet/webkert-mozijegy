import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservedRoutingModule } from './reserved-routing.module';
import { ReservedComponent } from './reserved.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ReservedComponent
  ],
  imports: [
    CommonModule,
    ReservedRoutingModule, 
    ReactiveFormsModule
  ]
})
export class ReservedModule { }
