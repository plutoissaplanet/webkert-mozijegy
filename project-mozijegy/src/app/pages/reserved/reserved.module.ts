import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservedRoutingModule } from './reserved-routing.module';
import { ReservedComponent } from './reserved.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ReservedComponent
  ],
  imports: [
    CommonModule,
    ReservedRoutingModule, 
    ReactiveFormsModule,
    MatButtonModule
  ]
})
export class ReservedModule { }
