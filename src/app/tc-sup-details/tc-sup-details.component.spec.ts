import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TcSupDetailsComponent } from './tc-sup-details.component';

describe('TcSupDetailsComponent', () => {
  let component: TcSupDetailsComponent;
  let fixture: ComponentFixture<TcSupDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TcSupDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TcSupDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
