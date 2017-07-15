import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'player-deck',
  templateUrl: './player-deck.component.html',
  styleUrls: ['./player-deck.component.css', '../app.component.css']
})
export class PlayerDeckComponent implements OnInit {
   @Input() name: string;


  constructor() { }

  ngOnInit() {
  }

}
