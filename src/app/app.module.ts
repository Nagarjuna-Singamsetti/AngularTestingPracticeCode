import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketReservationComponent } from './components/ticket-reservation/ticket-reservation.component';
import { VotesComponent } from './components/votes/votes.component';
import { TestingStringsArraysComponent } from './components/testing-strings-arrays/testing-strings-arrays.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketReservationComponent,
    VotesComponent,
    TestingStringsArraysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
