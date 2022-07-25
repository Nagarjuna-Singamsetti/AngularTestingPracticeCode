import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketReservationComponent } from './components/ticket-reservation/ticket-reservation.component';
import { VotesComponent } from './components/votes/votes.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketReservationComponent,
    VotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
