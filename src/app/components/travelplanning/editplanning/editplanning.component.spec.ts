import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditplanningComponent } from './editplanning.component';

describe('EditplanningComponent', () => {
  let component: EditplanningComponent;
  let fixture: ComponentFixture<EditplanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditplanningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditplanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
