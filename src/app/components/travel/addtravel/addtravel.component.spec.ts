import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtravelComponent } from './addtravel.component';

describe('AddtravelComponent', () => {
  let component: AddtravelComponent;
  let fixture: ComponentFixture<AddtravelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtravelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
