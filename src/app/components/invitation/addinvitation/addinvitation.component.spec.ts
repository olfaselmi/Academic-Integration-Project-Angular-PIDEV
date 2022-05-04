import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddinvitationComponent } from './addinvitation.component';

describe('AddinvitationComponent', () => {
  let component: AddinvitationComponent;
  let fixture: ComponentFixture<AddinvitationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddinvitationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddinvitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
