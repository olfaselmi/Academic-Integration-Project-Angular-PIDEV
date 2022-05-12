import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Trip } from 'src/app/Model/trip';
import { TripService } from 'src/services/trip.service';


@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {

  show:true;
  ListTrips:Trip[ ] ;
  trip:Trip;
  showAdd = false; 
   searchVal="";
 /* allTravels: any = []; */

  constructor(private ac:ActivatedRoute, private tripServ:TripService) { }
  ngOnInit(): void {
    
    this.tripServ.getAllTripsFromServer().subscribe(res=>{
      this.ListTrips=res;
    console.log(this.ListTrips)
    
  });
  }
  
  deleteTrip(id:number) {
    this.tripServ.deleteTripById(id).subscribe(()=>this.tripServ.getAllTripsFromServer()
      .subscribe(res=>{this.ListTrips=res})
    );
  }
 

  
    showForm(){
      this.showAdd=true;
    }
  
  addTrip(i:Trip){
    this.ListTrips.push(i);
      }
    
    
  
  }



