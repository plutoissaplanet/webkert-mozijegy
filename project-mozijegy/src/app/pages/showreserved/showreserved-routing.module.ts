import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowreservedComponent } from './showreserved.component';

const routes: Routes = [{ path: '', component: ShowreservedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowreservedRoutingModule { }
