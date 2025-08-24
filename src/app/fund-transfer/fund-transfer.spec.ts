import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundTransfer } from './fund-transfer';

describe('FundTransfer', () => {
  let component: FundTransfer;
  let fixture: ComponentFixture<FundTransfer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FundTransfer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FundTransfer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
