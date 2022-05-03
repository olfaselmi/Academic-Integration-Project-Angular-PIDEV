import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditopportunityComponent } from './editopportunity.component';

describe('EditopportunityComponent', () => {
  let component: EditopportunityComponent;
  let fixture: ComponentFixture<EditopportunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditopportunityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditopportunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
