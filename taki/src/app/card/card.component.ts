import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginDialogComponent } from "app/login-dialog/login-dialog.component";
import { MdDialog } from "@angular/material";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() color: string;

  handleClick() {
   
  }

  constructor() { }

  ngOnInit() {
  }

}
