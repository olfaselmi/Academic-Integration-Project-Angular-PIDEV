import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Compalint} from "../../../Model/Compalint";
import {ReponseReclamation} from "../../../Model/ReponseReclamation";
import {SessionService} from "../../../../services/session.service";
import {ReponseReclamationService} from "../../../../services/reponse-reclamation.service";
import {ComplaintService} from "../../../../services/complaint.service";


@Component({
  selector: 'app-reponse-reclamation',
  templateUrl: './reponse-reclamation.component.html',
  styleUrls: ['./reponse-reclamation.component.css']
})
export class ReponseReclamationComponent implements OnInit {
  idComplaint:number;
  idUser = 0;
  listrep:any;
  reclamation:any;
  rec:Compalint;
  listRepReclamation:any;
  listRepReclamationFront:any;
  showFormTemplateAdd:Boolean;
  showFormTemplateUpdate:Boolean;
  showFormTemplateId:number;
  inputRepReclamation: ReponseReclamation;
  params : any
  responseReclam : any
  constructor(private route: ActivatedRoute,private service:ReponseReclamationService,private serviceRec:ComplaintService,public session:SessionService) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        console.log(params);
        this.params = params;
      })
    this.showFormTemplateAdd=false;
    this.showFormTemplateUpdate=false;
    this.getReclamationByUser()

  }
  getUserId(){
    return  this.session.getUser().IdUser;
  }

  getReclamationByUser(){
    this.serviceRec.getReclamation(this.params.id).subscribe(res => {
      this.responseReclam = res
      console.log(res)
    })
  }



  saveRepRec(repRec: ReponseReclamation){
    this.showFormTemplateAdd=false;
    this.showFormTemplateUpdate=false;
  }

  showFormAdd()
  {this.showFormTemplateAdd=! this.showFormTemplateAdd;
  }

  updateForm(repRec:ReponseReclamation)
  {  this.showFormTemplateUpdate=!this.showFormTemplateUpdate;
    this.showFormTemplateId=repRec.IdReponseComplaint;
    this.inputRepReclamation=repRec;
  }

}
