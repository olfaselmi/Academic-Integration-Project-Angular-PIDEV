import {User} from "./user";
import {ReponseReclamation} from "./ReponseReclamation";
export class Reclamation{

  idReclamation:number;
  objet:string;
  messageReclamation:string;
  imageReclamation:string ;
  dateReclamation:Date;
  cloture:boolean =false;
  user:User;
  reponsesReclamation:ReponseReclamation[];


  constructor(idReclamation: number, objet: string, messageReclamation: string, imageReclamation: string, dateReclamation: Date, user: User,cloture:boolean) {
    this.idReclamation = idReclamation;
    this.objet = objet;
    this.messageReclamation = messageReclamation;
    if (imageReclamation!="" && !imageReclamation.includes("/assets/img/"))
    { this.imageReclamation = "/assets/img/ReclamationPic/" +imageReclamation;}
    else { this.imageReclamation = imageReclamation}
    this.dateReclamation = dateReclamation;
    this.cloture = cloture ;
    this.user = user;
  }
}

