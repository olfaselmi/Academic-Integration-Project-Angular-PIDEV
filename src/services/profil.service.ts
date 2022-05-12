import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { identity, Observable } from 'rxjs';
import { Profil } from 'src/app/Model/profil';
import { Travel } from 'src/app/Model/Travel';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  listProfils: string[];
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'

    })
  }
  constructor(private myHttp: HttpClient) { }


  readonly BaseURI = 'http://localhost:8089/SpringMVC';


  getAllProfilsFromServer(): Observable<Profil[]> {

    return this.myHttp.get<Profil[]>('http://localhost:8089/SpringMVC/Profil/retrieve-all-profil');
  }
  deleteProfilById(IdProfil: number) {
    return this.myHttp.delete("http://localhost:8089/SpringMVC/Profil/delete-Profil/" + IdProfil);
  }



  addProfil(id: any, Profil: Profil): Observable<Profil> {
    return this.myHttp.post<Profil>('http://localhost:8089/SpringMVC/Profil/add-profil/' + id, Profil, this.httpOptions);
  }



  updateProfil(id: number, idProfil: any, pwd: any, metric: any, profession: any, domain: any, followersNbr: any): Observable<Profil> {
    return this.myHttp.put<Profil>('http://localhost:8089/SpringMVC/Profil/update-profil/', { idProfil: idProfil, pwd: pwd, metric: metric, profession: profession, domain: domain, followersNbr: followersNbr },
      this.httpOptions);
  }

  getPopularity(idProfil : number){
    return this.myHttp.get('http://localhost:8089/SpringMVC/Profil/badge/' + idProfil)
  }

}
