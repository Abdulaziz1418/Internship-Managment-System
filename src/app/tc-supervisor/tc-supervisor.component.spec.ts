import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TcSupervisorComponent } from './tc-supervisor.component';

describe('TcSupervisorComponent', () => {
  let component: TcSupervisorComponent;
  let fixture: ComponentFixture<TcSupervisorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TcSupervisorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TcSupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
