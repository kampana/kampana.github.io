import { Injectable } from '@angular/core';
import { Card } from "app/model/card";

@Injectable()
export class DropVerificationService {

  constructor() { }

  isDroppable(cardOnDeck: Card, myCard: Card) {
    if (cardOnDeck.cardColor === myCard.cardColor) {
      return true;
    } else if (cardOnDeck.value === myCard.value) {
      return true;
    }
    
    return false;
  }

}
