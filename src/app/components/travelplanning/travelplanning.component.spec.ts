import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelplanningComponent } from './travelplanning.component';

describe('TravelplanningComponent', () => {
  let component: TravelplanningComponent;
  let fixture: ComponentFixture<TravelplanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelplanningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelplanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
