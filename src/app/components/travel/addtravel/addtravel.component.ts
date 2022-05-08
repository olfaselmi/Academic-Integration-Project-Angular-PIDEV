import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Travel } from 'src/app/Model/Travel';
import { TravelService } from 'src/services/travel.service';

@Component({
  selector: 'app-addtravel',
  templateUrl: './addtravel.component.html',
  styleUrls: ['./addtravel.component.css']
})
export class AddtravelComponent implements OnInit  {

  myForm :FormGroup;
  @Output() aded = new EventEmitter<Travel>();
  travel:Travel;

  constructor(private travelServ:TravelService) { }

  ngOnInit(): void {
    this.myForm=new FormGroup({
      idTravel:new FormControl(),
      destination: new FormControl(),
      startDate: new FormControl(),
      endDate: new FormControl(),
      objet: new FormControl()
    }) 
  }

  add(){
    this.travelServ.addTravel(this.myForm.value).subscribe();
  this.aded.emit(this.myForm.value);
  this.myForm.reset();
  //window.location.reload();
  }



}
