import { Injectable } from '@angular/core';
import { Card } from "app/model/card";

@Injectable()
export class DropVerificationService {

  constructor() { }

  isDroppable(cardOnDeck: Card, myCard: Card) {
    return false;
  }

}
