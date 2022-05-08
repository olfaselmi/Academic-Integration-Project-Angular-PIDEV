import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Travel } from 'src/app/Model/Travel';

@Injectable({
  providedIn: 'root'
})
export class TravelService {
  listTravels : string[];
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    
    })
  }
  constructor(private myHttp : HttpClient) { }
  readonly BaseURI = 'http://localhost:8089/SpringMVC';

 
  getAllTravelssFromServer(): Observable<Travel[]> {
     
    return this.myHttp.get<Travel[]>('http://localhost:8089/SpringMVC/travel/retrieve-all-travels');
  }

  deleteTravelById(id:number){
    return this.myHttp.delete("http://localhost:8089/SpringMVC/travel/remove-travel/"+id);
    }

    

   addTravel(travel:Travel):Observable<Travel>{
    return this.myHttp.post<Travel>("http://localhost:8089/SpringMVC/travel/add-travel/",travel,this.httpOptions);
     }

     getTravelById(idTravel:number):Observable<Travel>{
       return this.myHttp.get<Travel>("http://localhost:8089/SpringMVC/travel/retrieve-travel/"+idTravel);
       }
 

       updateTravel (id: number, travel: Travel): Observable<Travel> {
        return this.myHttp.put<Travel>('http://localhost:8089/SpringMVC/travel/modify-travel-byID/'+ id, travel,
        this.httpOptions);
        }

   
        
        getstatisticsFromServer(): Observable<any> {
     
          return this.myHttp.get<any>('http://localhost:8089/SpringMVC/travel/statisticnbTravelUser');
        }
        
        //***************************************************************************** */
        getMatchedFromServer(): Observable<String[]> {
     
          return this.myHttp.get<String[]>('http://localhost:8089/SpringMVC/travel/getmatched');
        }


          AffectTravelToTraveler(idTravel:number,idUser:number ):Observable<String>{
            return this.myHttp.post<String>("http://localhost:8089/SpringMVC/travel/AffectTravelToTraveler/"+idTravel+"/"+idUser,this.httpOptions);
             }

           GetFriend():Observable<any>{
            return this.myHttp.get<any>("http://localhost:8089/SpringMVC/travel/retrieve-friend/1");
            }

            GetNbreTravel():Observable<number>{
              return this.myHttp.get<number>("http://localhost:8089/SpringMVC/travel/nbr-travel");
              }
}

///////////////////////////////git
