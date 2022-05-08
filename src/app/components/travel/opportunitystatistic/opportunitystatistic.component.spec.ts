import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunitystatisticComponent } from './opportunitystatistic.component';

describe('OpportunitystatisticComponent', () => {
  let component: OpportunitystatisticComponent;
  let fixture: ComponentFixture<OpportunitystatisticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpportunitystatisticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunitystatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
