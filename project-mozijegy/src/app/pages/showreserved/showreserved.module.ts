import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowreservedRoutingModule } from './showreserved-routing.module';
import { ShowreservedComponent } from './showreserved.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ShowreservedComponent
  ],
  imports: [
    CommonModule,
    ShowreservedRoutingModule,
    MatButtonModule
  ]
})
export class ShowreservedModule { }
