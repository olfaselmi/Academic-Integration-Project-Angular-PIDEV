import { ComponentFixture, TestBed } from '@angular/core/testing';
import {AddcomplaintComponent} from "./addcomplaint.component";


describe('AddcomplaintComponent', () => {
  let component: AddcomplaintComponent;
  let fixture: ComponentFixture<AddcomplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcomplaintComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcomplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
