import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentssubmissionComponent } from './studentssubmission.component';

describe('StudentssubmissionComponent', () => {
  let component: StudentssubmissionComponent;
  let fixture: ComponentFixture<StudentssubmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentssubmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentssubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
