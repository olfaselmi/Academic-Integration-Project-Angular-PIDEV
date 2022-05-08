import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Travel } from 'src/app/Model/Travel';
import { TravelService } from 'src/services/travel.service';

@Component({
  selector: 'app-affectemployee',
  templateUrl: './affectemployee.component.html',
  styleUrls: ['./affectemployee.component.css']
})
export class AffectemployeeComponent implements OnInit {
  travel:Travel;
myForm:FormGroup;
  constructor(private travelServ:TravelService) { }

  ngOnInit(): void {

this.myForm=new FormGroup({
  idTravel:new FormControl(),
  idUser: new FormControl(),
 
})
  }

  affectation(){
   let idTravel=this.myForm.get("idTravel").value;
   let idUser=this.myForm.get("idUser").value;
    this.travelServ.AffectTravelToTraveler(idTravel,idUser).subscribe()
    console.log("ddddd");
  }

}
