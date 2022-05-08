import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TravelPlanning } from 'src/app/Model/TravelPlanning';

@Injectable({
  providedIn: 'root'
})
export class TravelplanningService {

  listTravels : string[];
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    
    })
  }

  constructor(private http : HttpClient) { }

  addTravelPlanning (travelplanning: TravelPlanning): Observable<TravelPlanning> {
    return this.http.post<TravelPlanning>("http://localhost:8089/SpringMVC/travelplanning/add-travelplanning/"+travelplanning.idTravel,travelplanning,this.httpOptions);
}

getAllTravelsPlanningFromServer(): Observable<TravelPlanning[]> {
     
  return this.http.get<TravelPlanning[]>('http://localhost:8089/SpringMVC/travelplanning/retrieve-all-plannings');
}


getTravelPlanningById(idPlanning:number):Observable<TravelPlanning>{
  return this.http.get<TravelPlanning>("http://localhost:8089/SpringMVC/travel/retrieve-travel/"+idPlanning);
  }


  updateTravelPlanning (id: number, travelPlanning: TravelPlanning): Observable<TravelPlanning> {
   return this.http.put<TravelPlanning>('http://localhost:8089/SpringMVC/travelplanning/modify-travel¨Planning-byID/'+ id, travelPlanning,
   this.httpOptions);
   }

   deleteTravelPlanningById(id:number){
    return this.http.delete("http://localhost:8089/SpringMVC/travelplanning/removePlanning/"+id);
    }

}