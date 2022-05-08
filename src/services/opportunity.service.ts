import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Opportunity } from 'src/app/Model/Opportunity';

@Injectable({
  providedIn: 'root'
})
export class OpportunityService {
  listopportunities : string[];
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    
    })
  }

  constructor(private myHttp : HttpClient) { }
  getAllOpportunities(): Observable<Opportunity[]> {
    return this.myHttp.get<Opportunity[]>('http://localhost:8089/SpringMVC/opportunity/retrieve-all-opportunities');
  }

  deleteopportunityById(id:number){
    return this.myHttp.delete("http://localhost:8089/SpringMVC/opportunity/remove-opportunity/"+id);
    }

    addOpportunity(opportunity:Opportunity):Observable<Opportunity>{
      return this.myHttp.post<Opportunity>("http://localhost:8089/SpringMVC/opportunity/assignopportunUser/1",opportunity,this.httpOptions);
      }

      getOpportunityById(idOpportunity:number):Observable<Opportunity>{
        return this.myHttp.get<Opportunity>("http://localhost:8089/SpringMVC/opportunity/retrieve-opportunity/"+idOpportunity);
        }
  
 
        updateOpportunity (id: number, opportunity: Opportunity): Observable<Opportunity> {
         return this.myHttp.put<Opportunity>('http://localhost:8089/SpringMVC/opportunity/modify-oppotunity-byID/'+ id, opportunity,
         this.httpOptions);
         }


         getstatisticsoppFromServer(): Observable<any> {
     
          return this.myHttp.get<any>('http://localhost:8089/SpringMVC/opportunity/statisticnbOpportunityUser');
        }
        
    }


