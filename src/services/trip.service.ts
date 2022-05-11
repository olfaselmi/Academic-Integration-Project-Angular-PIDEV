import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Travel } from 'src/app/Model/Travel';
import { Trip } from 'src/app/Model/trip';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  listTrip: string[];
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'

    })
  }
  constructor(private myHttp: HttpClient) { }
  readonly BaseURI = 'http://localhost:8089/SpringMVC';




  deleteTripById(idu: number, idt: number) {
    return this.myHttp.delete(`http://localhost:8089/SpringMVC/trip/delete/${idu}/${idt}`);
  }



  addTrip(trip: Trip, id: any) {
    return this.myHttp.post<Trip>(`http://localhost:8089/SpringMVC/trip/add/${id}`, trip);
  }

  getTripById(IdTrip: number){
    return this.myHttp.get<Trip>("http://localhost:8089/SpringMVC/trip/getall/" + IdTrip);
  }




}

