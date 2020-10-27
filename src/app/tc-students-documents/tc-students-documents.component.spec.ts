import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TcStudentsDocumentsComponent } from './tc-students-documents.component';

describe('TcStudentsDocumentsComponent', () => {
  let component: TcStudentsDocumentsComponent;
  let fixture: ComponentFixture<TcStudentsDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TcStudentsDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TcStudentsDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
