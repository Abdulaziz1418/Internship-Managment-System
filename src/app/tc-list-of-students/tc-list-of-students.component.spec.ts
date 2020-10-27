import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TCListOfStudentsComponent } from './tc-list-of-students.component';

describe('TCListOfStudentsComponent', () => {
  let component: TCListOfStudentsComponent;
  let fixture: ComponentFixture<TCListOfStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TCListOfStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TCListOfStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
