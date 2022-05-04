import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TravelPlanning } from 'src/app/Model/TravelPlanning';
import { TravelplanningService } from 'src/services/travelplanning.service';

@Component({
  selector: 'app-travelplanning',
  templateUrl: './travelplanning.component.html',
  styleUrls: ['./travelplanning.component.css']
})
export class TravelplanningComponent implements OnInit {

  myForm :FormGroup;
  @Output() aded = new EventEmitter<TravelPlanning>();
  
  listTravelPlannings:TravelPlanning[];
  travelplanning:TravelPlanning;
  showAdd = false;
   show=false;
  myid:number;

  constructor(private ac:ActivatedRoute, private travelplanningServ:TravelplanningService) { }

  ngOnInit(): void {
    this.ac.paramMap.subscribe(next=> this.myid=(Number(next.get("id"))))
    console.log(this.myid)
      this.myForm=new FormGroup({
      idPlanning:new FormControl(),
      schedule: new FormControl(),
      description: new FormControl(),
      day: new FormControl(),
      idTravel :new FormControl(this.myid, Validators.required)
   
    }) 

  }

 

  showForm(){
    this.showAdd=true;
  }
  addTravelPlanning(i:TravelPlanning){
    this.listTravelPlannings.push(i);
      }


  add(){
    this.travelplanningServ.addTravelPlanning(this.myForm.value).subscribe();
  this.aded.emit(this.myForm.value);
  this.myForm.reset();
  window.location.reload();
  }


     
}