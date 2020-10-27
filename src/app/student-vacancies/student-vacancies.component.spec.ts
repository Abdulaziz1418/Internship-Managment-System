import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentVacanciesComponent } from './student-vacancies.component';

describe('StudentVacanciesComponent', () => {
  let component: StudentVacanciesComponent;
  let fixture: ComponentFixture<StudentVacanciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentVacanciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentVacanciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
