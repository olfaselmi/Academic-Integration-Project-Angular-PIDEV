import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddopportunityComponent } from './addopportunity.component';

describe('AddopportunityComponent', () => {
  let component: AddopportunityComponent;
  let fixture: ComponentFixture<AddopportunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddopportunityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddopportunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
