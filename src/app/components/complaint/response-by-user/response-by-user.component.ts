import { Component, OnInit } from '@angular/core';
import {ReponseReclamationService} from "../../../../services/reponse-reclamation.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-response-by-user',
  templateUrl: './response-by-user.component.html',
  styleUrls: ['./response-by-user.component.css']
})
export class ResponseByUserComponent implements OnInit {
  params : any;
  responseList : any


  constructor(private resService : ReponseReclamationService , private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        console.log(params);
        this.params = params;
      })
    this.resService.displayResponsesByUser(this.params.idUser).subscribe(res => {
      console.log('this is the response', res)
      this.responseList = res;
    })
  }



}
