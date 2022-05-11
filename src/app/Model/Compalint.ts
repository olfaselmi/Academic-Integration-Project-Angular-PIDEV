import {User} from "./User";

export class Compalint{
  idComplaint:number
  topic:string
  messageComplaint:string
  imageComplaint:string
  dateComplaint:Date
  cloture:boolean
  id_complained:number
  id_complainer:number
  IdTrip:number
  user:User;
  constructor(idComplaint: number, topic: string, messageComplaint: string, imageComplaint: string, dateComplaint: Date, user: User,cloture:boolean) {
    this.idComplaint = (idComplaint);
    this.topic = topic;
    this.messageComplaint = messageComplaint;
    if (imageComplaint!="" && !imageComplaint.includes("/assets/img/"))
    { this.imageComplaint= "/assets/img/ReclamationPic/" +imageComplaint;}
    else { this.imageComplaint = imageComplaint}
    this.dateComplaint = dateComplaint;
    this.cloture = cloture ;
    this.user = user;
  }
}
