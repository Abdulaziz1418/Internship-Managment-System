import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TCApproveAccountsComponent } from './tcapprove-accounts.component';

describe('TCApproveAccountsComponent', () => {
  let component: TCApproveAccountsComponent;
  let fixture: ComponentFixture<TCApproveAccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TCApproveAccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TCApproveAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
