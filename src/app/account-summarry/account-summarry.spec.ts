import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSummarry } from './account-summarry';

describe('AccountSummarry', () => {
  let component: AccountSummarry;
  let fixture: ComponentFixture<AccountSummarry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountSummarry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountSummarry);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
