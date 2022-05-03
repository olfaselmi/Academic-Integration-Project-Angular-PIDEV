import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiwPlanningsComponent } from './veiw-plannings.component';

describe('VeiwPlanningsComponent', () => {
  let component: VeiwPlanningsComponent;
  let fixture: ComponentFixture<VeiwPlanningsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeiwPlanningsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiwPlanningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
