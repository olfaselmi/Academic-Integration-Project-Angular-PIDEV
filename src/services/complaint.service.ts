import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Compalint} from "../app/Model/Compalint";

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {
  ListComplaints: string[];
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private myHttp: HttpClient) {
  }

  getAllComplaints(): Observable<any> {
    return this.myHttp.get<any>('http://localhost:8089/SpringMVC/Complaint/retrieve-all-complaints');
  }

  deleteComplaintById(idComplaint: number) {
    return this.myHttp.delete("http://localhost:8089/SpringMVC/Complaint/delete/"+ idComplaint);
  }

  addComplaint(C: Compalint): Observable<Compalint> {
    return this.myHttp.post<Compalint>("http://localhost:8089/SpringMVC/Complaint/add/"+C.id_complainer+"/"+C.id_complained+"/"+C.IdTrip, C);
  }
  public getReclamationByUser (idComplaint :number)
  {return this.myHttp.get('http://localhost:8089/SpringMVC/Complaint/triByUser'+idComplaint);}


    public getReclamation(idComplaint: number | null)
  {return this.myHttp.get('http://localhost:8089/SpringMVC/Complaint/retrieve-complaint/'+ idComplaint);}
}
