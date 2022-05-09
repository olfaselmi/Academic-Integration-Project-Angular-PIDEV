

export class User{
    idUser: number;
    nom: string;
    prenom: string;
    dateNaissance: Date;
    email: string;
    password: string;
    urlpicture: string;
    token : string;
    badge: string;
    promoActive: boolean;
   // planning: Planning[];
   

    constructor(email:string="",password:string=""){
      this.email = email;
      this.password = password;
     // this.badge = badge;
    }
  }
  