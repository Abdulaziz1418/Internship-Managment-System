import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgHomePageComponent } from './org-home-page.component';

describe('OrgHomePageComponent', () => {
  let component: OrgHomePageComponent;
  let fixture: ComponentFixture<OrgHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
