import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectemployeeComponent } from './affectemployee.component';

describe('AffectemployeeComponent', () => {
  let component: AffectemployeeComponent;
  let fixture: ComponentFixture<AffectemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffectemployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffectemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
