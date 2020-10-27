import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TCAccountComponent } from './tcaccount.component';

describe('TCAccountComponent', () => {
  let component: TCAccountComponent;
  let fixture: ComponentFixture<TCAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TCAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TCAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
