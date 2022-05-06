import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule)
  },
  {
    path: 'films',
    loadChildren: () => import('./pages/films/films.module').then(m => m.FilmsModule)
  },
  {
    path: '',
    redirectTo: '/main',
    pathMatch:'full'
  },
  {
    path: 'notfound',
    loadChildren: () => import('./pages/notfound/notfound.module').then(m => m.NotfoundModule)
  },
  { 
    path: 'reserved', loadChildren: () => import('./pages/reserved/reserved.module').then(m => m.ReservedModule)
   },
  { 
    path: 'reservation', loadChildren: () => import('./pages/reservation/reservation.module').then(m => m.ReservationModule) 
  },
 
  {
    path: '**',
    redirectTo: '/notfound'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
