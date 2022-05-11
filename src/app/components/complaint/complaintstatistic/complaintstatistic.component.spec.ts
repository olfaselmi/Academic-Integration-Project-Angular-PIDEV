import { ComponentFixture, TestBed } from '@angular/core/testing';
import {ComplaintstatisticComponent} from "./complaintstatistic.component";


describe('ComplaintstatisticComponent', () => {
  let component: ComplaintstatisticComponent;
  let fixture: ComponentFixture<ComplaintstatisticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplaintstatisticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintstatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
