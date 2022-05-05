import { invitation } from "./Invitation";
import { Opportunity } from "./Opportunity";
import { Travel } from "./Travel";
import { TravelPlanning } from "./TravelPlanning";

export class User{
    IdUser:number ;
    FirstName :string;
    LastName :string;
    Adress :string;
    Birthday: Date;
    Email: string;
    Pwd: string;
    PhoneNumber :number;
    urlpicture: string;
    token : string;
    badge: string;
    blocked :any;
    scoreEvents :any;
    Invitation: invitation[];
    Opportunity: Opportunity[];
    Travel: Travel[];
    TravelPlanning: TravelPlanning[];



    constructor(email:string="",password:string=""){
        this.Email = email;
        this.Pwd = password;
      }
    }