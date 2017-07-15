import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdCardModule } from '@angular/material';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { PlayerDeckComponent } from './player-deck/player-deck.component';
import { CashDeckComponent } from './cash-deck/cash-deck.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    PlayerDeckComponent,
    CashDeckComponent
  ],
  imports: [
    BrowserModule,
    MdCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
