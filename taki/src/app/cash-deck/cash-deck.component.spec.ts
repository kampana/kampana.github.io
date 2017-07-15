import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashDeckComponent } from './cash-deck.component';

describe('CashDeckComponent', () => {
  let component: CashDeckComponent;
  let fixture: ComponentFixture<CashDeckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashDeckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
