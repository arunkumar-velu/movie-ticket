import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MovieListComponent } from './movielist/movielist.component';
import { TicketsComponent } from './tickets/tickets.component';
import { SeatComponent } from './seat/seat.component';

import { appRouterModule } from "./app.routes";


@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    TicketsComponent,
    SeatComponent
  ],
  imports: [
    BrowserModule,
    appRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
