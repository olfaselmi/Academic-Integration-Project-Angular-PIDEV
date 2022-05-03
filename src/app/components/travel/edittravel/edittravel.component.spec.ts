import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittravelComponent } from './edittravel.component';

describe('EdittravelComponent', () => {
  let component: EdittravelComponent;
  let fixture: ComponentFixture<EdittravelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdittravelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdittravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
