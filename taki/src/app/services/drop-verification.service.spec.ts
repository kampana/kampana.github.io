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

  it('should drop card blue on card blue', inject([DropVerificationService], (service: DropVerificationService) => {
    let myCard = new Card();
    myCard.
    let cardOnDeck = new Card();

    expect(service.isDroppable(cardOnDeck, myCard)).toBe(true);
  }));
});
