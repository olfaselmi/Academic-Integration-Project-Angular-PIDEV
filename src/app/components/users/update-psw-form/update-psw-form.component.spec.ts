import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePswFormComponent } from './update-psw-form.component';

describe('UpdatePswFormComponent', () => {
  let component: UpdatePswFormComponent;
  let fixture: ComponentFixture<UpdatePswFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePswFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePswFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
