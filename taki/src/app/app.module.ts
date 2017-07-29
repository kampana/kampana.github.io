import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdCardModule } from '@angular/material';
import { MaterialModule, MdDialogModule } from '@angular/material';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { PlayerDeckComponent } from './player-deck/player-deck.component';
import { CashDeckComponent } from './cash-deck/cash-deck.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    PlayerDeckComponent,
    CashDeckComponent,
    LoginDialogComponent
  ],
  imports: [
    BrowserAnimationsModule, 
    BrowserModule,
    MdCardModule,
    MdDialogModule,
    FormsModule,
    MaterialModule,
    HttpClientModule
  ],
  entryComponents: [
    LoginDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
