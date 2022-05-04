import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditinvitationComponent } from './editinvitation.component';

describe('EditinvitationComponent', () => {
  let component: EditinvitationComponent;
  let fixture: ComponentFixture<EditinvitationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditinvitationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditinvitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
