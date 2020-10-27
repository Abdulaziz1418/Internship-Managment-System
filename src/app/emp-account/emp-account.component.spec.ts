import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpAccountComponent } from './emp-account.component';

describe('EmpAccountComponent', () => {
  let component: EmpAccountComponent;
  let fixture: ComponentFixture<EmpAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
