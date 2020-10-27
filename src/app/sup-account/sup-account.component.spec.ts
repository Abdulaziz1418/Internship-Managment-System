import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupAccountComponent } from './sup-account.component';

describe('SupAccountComponent', () => {
  let component: SupAccountComponent;
  let fixture: ComponentFixture<SupAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
