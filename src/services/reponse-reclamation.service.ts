import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ReponseReclamation} from "../app/Model/ReponseReclamation";
import {Compalint} from "../app/Model/Compalint";

@Injectable({
  providedIn: 'root'
})
export class ReponseReclamationService {

  constructor(private http:HttpClient) { }

  public displayResponsesByUser ( idUser : any){
    return this.http.get('http://localhost:8089/SpringMVC/ResponseComplaint/By/' + idUser)
  }

  public afficherReponseReclamation ()
  {return this.http.get('http://localhost:8089/SpringMVC/ResponseComplaint/retrieve-all-reponsesreclamations');}

  public ajouterReponseReclamation (response: any,idComplaint: number,IdUser:number)

  {
    return this.http.post(`http://localhost:8089/SpringMVC/ResponseComplaint/add/${idComplaint}/${IdUser}` , { response : response});}


}
