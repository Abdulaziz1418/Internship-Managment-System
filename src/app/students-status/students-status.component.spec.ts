import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsStatusComponent } from './students-status.component';

describe('StudentsStatusComponent', () => {
  let component: StudentsStatusComponent;
  let fixture: ComponentFixture<StudentsStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
