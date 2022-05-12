import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Travel } from 'src/app/Model/Travel';
import { Trip } from 'src/app/Model/trip';
import { TravelService } from 'src/services/travel.service';
import { TripService } from 'src/services/trip.service';

@Component({
  selector: 'app-addtrip',
  templateUrl: './addtrip.component.html',
  styleUrls: ['./addtrip.component.css']
})
export class AddtripComponent implements OnInit {

  myForm :FormGroup;
  @Output() aded = new EventEmitter<Trip>();
  travel:Trip;

  constructor(private travelServ:TripService) { }

  ngOnInit(): void {                                        
   
    this.myForm=new FormGroup({
      IdTrip:new FormControl(),                                     
      Domain: new FormControl(),
      Duration: new FormControl(),
      DateBegin: new FormControl(),
      DateEnd: new FormControl(),
      CodeMatche: new FormControl()
    }) 
  }

  add(){
    this.travelServ.addTrip(this.myForm.value).subscribe();
  this.aded.emit(this.myForm.value);
  this.myForm.reset();
  window.location.reload();
  }

  


}
