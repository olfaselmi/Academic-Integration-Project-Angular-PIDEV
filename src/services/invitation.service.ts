import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { invitation } from 'src/app/Model/Invitation';
@Injectable({
  providedIn: 'root'
})
export class InvitationService {
  listopportunities : string[];
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    
    })
  }

  constructor(private myHttp : HttpClient) { }
  getAllOpportunities(): Observable<invitation[]> {
    return this.myHttp.get<invitation[]>('http://localhost:8089/SpringMVC/opportunity/retrieve-all-opportunities');
  }

  deleteopportunityById(id:number){
    return this.myHttp.delete("http://localhost:8089/SpringMVC/Invitation/remove-Invitation/{idInvitation}"+id);
    }

    addOpportunity(opportunity:invitation):Observable<invitation>{
      return this.myHttp.post<invitation>("http://localhost:8089/SpringMVC/Invitation/addInvitation",opportunity,this.httpOptions);
      }

      getOpportunityById(idOpportunity:number):Observable<invitation>{
        return this.myHttp.get<invitation>("http://localhost:8089/SpringMVC/opportunity/retrieve-opportunity/"+idOpportunity);
        }
  
 
        updateOpportunity (id: number, opportunity: invitation): Observable<invitation> {
         return this.myHttp.put<invitation>('http://localhost:8089/SpringMVC/opportunity/modify-oppotunity-byID/'+ id, opportunity,
         this.httpOptions);
         }

}