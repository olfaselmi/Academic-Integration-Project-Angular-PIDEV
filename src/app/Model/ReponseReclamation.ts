import {Compalint} from "./Compalint";
import {User} from "./User";

export class ReponseReclamation{
  IdReponseComplaint: number;
  Response: string;
  ImageReponseComplaint: string ;
  DateReponseComplaint: Date;
  user:User;
  Reclamation:Compalint;
  //numreclamation:number;

  constructor( IdReponseComplaint: number,  Response: string,ImageReponseComplaint: string,DateReponseComplaint: Date, user: User,reclamation:Compalint) {
    this.IdReponseComplaint =  IdReponseComplaint;
    this.Response=Response;

    if (ImageReponseComplaint!="" && !ImageReponseComplaint.includes("/assets/img/"))
    { this.ImageReponseComplaint = "/assets/img/ReclamationPic/" +ImageReponseComplaint;}
    else { this.ImageReponseComplaint= ImageReponseComplaint}

    this.Reclamation=reclamation;
    this.DateReponseComplaint =DateReponseComplaint;
    this.user = user;
  }
}
