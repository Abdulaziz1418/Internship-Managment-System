import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingCommitteeLayoutComponent } from './training-committee-layout.component';

describe('TrainingCommitteeLayoutComponent', () => {
  let component: TrainingCommitteeLayoutComponent;
  let fixture: ComponentFixture<TrainingCommitteeLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingCommitteeLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingCommitteeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
