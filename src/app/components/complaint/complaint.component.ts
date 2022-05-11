import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {ComplaintService} from 'src/services/complaint.service';
import {Compalint} from "../../Model/Compalint";

@Component({
  selector: 'app-compalaint',
  templateUrl: './compalaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent implements OnInit {
  idUser =0;
  c!:any;
  ListComplaints:Compalint[];
  constructor(private ac:ActivatedRoute, private CompalintServ:ComplaintService  , private router: Router) { }
showAdd = false;
  ngOnInit(): void {
    this.CompalintServ.getAllComplaints().subscribe((d) => {
        this.c = d;
        console.log(d)
        console.log(this.c.complainedAbout);
        console.log(this.c.complainer);
      }
    );

  }


  deleteComplaint(idComplaint:number){
    this.CompalintServ.deleteComplaintById(idComplaint).subscribe(()=>this.CompalintServ.getAllComplaints()
      .subscribe(res=>{this.ListComplaints=res
        window.location.reload();})
    );
  }
  showForm(){
    this.showAdd=true;
  }

navigate(id : any , idUser : any){
  this.router.navigateByUrl('espaceReclamation?id=' + id + '&idUser=' + idUser)
}

  navigateToResponses(idUser : any){
    this.router.navigateByUrl('listResponse?idUser=' + idUser )
  }
  addComplaint(i:Compalint){
    this.ListComplaints.push(i);
      }

  searchComplaintbyToTrip(toTrip:any){
    console.log(toTrip);
    this.c.getComplaintsByUser(toTrip).subscribe(
      (e)=>{

        this.c=e;
        console.log(e);
      }
    );
  }
  }


