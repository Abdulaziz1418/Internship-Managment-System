import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupListOfStudentsComponent } from './sup-list-of-students.component';

describe('SupListOfStudentsComponent', () => {
  let component: SupListOfStudentsComponent;
  let fixture: ComponentFixture<SupListOfStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupListOfStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupListOfStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
