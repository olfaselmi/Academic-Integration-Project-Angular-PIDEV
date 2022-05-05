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
  getAllInvitations(): Observable<invitation[]> {
    return this.myHttp.get<invitation[]>('http://localhost:8089/SpringMVC/Invitation/get-all-Invitation');
  }

  deleteinvitationById(id:number){
    return this.myHttp.delete("http://localhost:8089/SpringMVC/Invitation/remove-Invitation/{idInvitation}"+id);
    }

    addInvitation(invitation:invitation):Observable<invitation>{
      return this.myHttp.post<invitation>("http://localhost:8089/SpringMVC/Invitation/addInvitation",invitation,this.httpOptions);
      }

      getInvitationById(idInvi:number):Observable<invitation>{
        return this.myHttp.get<invitation>("http://localhost:8089/SpringMVC/Invitation/get-invitation-by-user/{idUser}"+idInvi);
        }
  
 
        updateInvitation (id: number, opportunity: invitation): Observable<invitation> {
         return this.myHttp.put<invitation>('http://localhost:8089/SpringMVC/opportunity/modify-oppotunity-byID/'+ id, invitation,
         this.httpOptions);
         }

}