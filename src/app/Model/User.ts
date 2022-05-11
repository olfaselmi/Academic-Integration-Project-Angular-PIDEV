import {ReponseReclamation} from "./ReponseReclamation";
import {Compalint} from "./Compalint";

export class User{
  IdUser:number
  FirstName:string
  LastName:string
  Pwd:string
  Adress:string
  Birthday:Date
  PhoneNumber:number
  email:string
  Urlpicture:string
  token:string
  reponses: ReponseReclamation[];
  reclamations: Compalint[];
}
