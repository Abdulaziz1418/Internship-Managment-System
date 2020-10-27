import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TChomeComponent } from './tchome.component';

describe('TChomeComponent', () => {
  let component: TChomeComponent;
  let fixture: ComponentFixture<TChomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TChomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TChomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
