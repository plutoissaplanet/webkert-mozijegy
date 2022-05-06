import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './pages/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { FilmsComponent } from './pages/films/films.component';
//import { ReservationComponent } from './pages/reservation/reservation.component';
//import { NotfoundComponent } from './pages/notfound/notfound.component';
//import { MainComponent } from './pages/main/main.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    //FilmsComponent,
    //ReservationComponent,
    //NotfoundComponent,
    //MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    FlexLayoutModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
