import { DeckFetcherService } from './services/deck-fetcher.service';
import { DropVerificationService } from './services/drop-verification.service';
import { HttpClient } from '@angular/common/http';
import { Component, AfterViewInit, AfterContentChecked, AfterViewChecked, AfterContentInit, OnInit } from '@angular/core';
import { MdDialog } from "@angular/material";
import { LoginDialogComponent } from "app/login-dialog/login-dialog.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DropVerificationService, DeckFetcherService]
})
export class AppComponent implements AfterViewInit, AfterContentInit, OnInit {
  returnedData = "waiting";

  constructor(private dialog: MdDialog,
    private dropVerificationService: DropVerificationService,
    private deckFetcherService: DeckFetcherService) {
  }

  ngOnInit(): void {
    let myCards = this.deckFetcherService.doLogin(data => {
      //this.returnedData = data[0].value;
      this.returnedData = data;
    });
  }

  ngAfterContentInit(): void {
  }


  ngAfterViewInit(): void {
    /*  setTimeout(() => {
       this.dialog.open(LoginDialogComponent, {
         height: '18em',
         width: '30%',
         disableClose: true,
       });
     }, 500); */
  }
}
