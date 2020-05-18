import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddskilsComponent } from './addskils.component';

describe('AddskilsComponent', () => {
  let component: AddskilsComponent;
  let fixture: ComponentFixture<AddskilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddskilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddskilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
