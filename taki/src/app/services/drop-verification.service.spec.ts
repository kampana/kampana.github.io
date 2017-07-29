import { CardColor } from 'app/model/cardColor';
import { TestBed, inject } from '@angular/core/testing';

import { DropVerificationService } from './drop-verification.service';
import { Card } from "app/model/card";

describe('DropVerificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DropVerificationService]
    });
  });

  it('should be created', inject([DropVerificationService], (service: DropVerificationService) => {
    expect(service).toBeTruthy();
  }));

  it('should be able to drop color X on the same card color X', inject([DropVerificationService], (service: DropVerificationService) => {
    let myCard = new Card();
    myCard.cardColor = CardColor.Blue;
    let cardOnDeck = new Card();
    cardOnDeck.cardColor = CardColor.Blue;

    expect(service.isDroppable(cardOnDeck, myCard)).toBe(true);
  }));

    it('should be able to drop color X on the same card color X. with a different value', inject([DropVerificationService], (service: DropVerificationService) => {
    let myCard = new Card();
    myCard.cardColor = CardColor.Blue;
    myCard.value = 7;
    let cardOnDeck = new Card();
    cardOnDeck.cardColor = CardColor.Blue;
    cardOnDeck.value = 5;

    expect(service.isDroppable(cardOnDeck, myCard)).toBe(true);
  }));

    it('should be able to drop color X on the color Y. with the same value', inject([DropVerificationService], (service: DropVerificationService) => {
    let myCard = new Card();
    myCard.cardColor = CardColor.Blue;
    myCard.value = 7;
    let cardOnDeck = new Card();
    cardOnDeck.cardColor = CardColor.Green;
    cardOnDeck.value = 7;

    expect(service.isDroppable(cardOnDeck, myCard)).toBe(true);
  }));

     it('should not be able to drop color X on the color Y, different value', inject([DropVerificationService], (service: DropVerificationService) => {
    let myCard = new Card();
    myCard.cardColor = CardColor.Blue;
    myCard.value = 8;
    let cardOnDeck = new Card();
    cardOnDeck.cardColor = CardColor.Green;
    cardOnDeck.value = 7;

    expect(service.isDroppable(cardOnDeck, myCard)).toBe(false);
  }));


});
