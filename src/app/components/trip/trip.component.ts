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

  show: true;
  ListTrips: Trip[];
  trip: Trip;
  showAdd = false;
  showdelete = false;
  searchVal: number;
  allTrips: any = [];
  IdTrip: any;
  result: any;

  
  constructor(private ac: ActivatedRoute, private tripServ: TripService) { }
  ngOnInit(): void {

    this.tripServ.getTripById(this.IdTrip).subscribe(res => {
      this.allTrips = res;
      console.log(this.ListTrips)

    });
  }

  deleteTrip(idu: number, idt: number) {
    this.tripServ.deleteTripById(idu, idt).subscribe(
      () => {
        console.log('success')
        this.findById(idu)
      }
    );

  }

  findById(id: any) {
    this.tripServ.getTripById(id).subscribe(res => {
      this.result = res;
      console.log('this is the response ', res)
    }, err => {
      console.log(err)
    })

  }


  showForm() {
    this.showAdd = true;

  }

  addTrip(i: Trip) {
    this.ListTrips.push(i);
  }



}



