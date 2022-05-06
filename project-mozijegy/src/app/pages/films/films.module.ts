import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsComponent } from './films.component';
import { FilmsRoutingModule } from './films-routing.module';
import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';



@NgModule({
  declarations: [
    FilmsComponent
  ],
  imports: [
    CommonModule,
    FilmsRoutingModule,
    MatDividerModule,
    MatDialogModule,
    MatButtonModule,
    MatExpansionModule
    
  ]
})
export class FilmsModule { }
