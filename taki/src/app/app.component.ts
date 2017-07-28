import { Component, AfterViewInit, AfterContentChecked, AfterViewChecked, AfterContentInit } from '@angular/core';
import { MdDialog } from "@angular/material";
import { LoginDialogComponent } from "app/login-dialog/login-dialog.component";
import { DropVerificationService } from "app/services/drop-verification.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DropVerificationService]
})
export class AppComponent implements AfterViewInit, AfterContentInit {

  ngAfterContentInit(): void {
  }

  constructor(public dialog: MdDialog, private dropVerificationService: DropVerificationService) {
    dropVerificationService.doSomething();
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
