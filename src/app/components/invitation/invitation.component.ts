import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { invitation } from 'src/app/Model/Invitation';
import { InvitationService } from 'src/services/invitation.service';

@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.css']
})
export class InvitationComponent implements OnInit {
 // dtOptions: DataTables.Settings = {};
 // dtTrigger: Subject<any> = new Subject<any>();
 show:true;
 invitation:invitation;

  Listinvitations:invitation[];
  constructor(private ac:ActivatedRoute, private invitationServ:InvitationService) { }
showAdd = false;
  ngOnInit(): void {

    this.invitationServ.getAllInvitations().subscribe((res:any)=>{this.Listinvitations=res;
   //   this.dtTrigger.next(1);
    });
  }

  deleteOpportunity(id:number){
    this.invitationServ.deleteinvitationById(id).subscribe(()=>this.invitationServ.getAllInvitations()
      .subscribe(res=>{this.Listinvitations=res})
    );
  }
  showForm(){
    this.showAdd=true;
  }
  addOpportunity(i:invitation){
    this.Listinvitations.push(i);
      }

      editOpportunity(x:invitation){
        this.show=true;
        this.invitation=x;
        
      }
      
      editMyInvitation(i :any){
    
      }

     // ngOnDestroy(): void {
     //   this.dtTrigger.unsubscribe();
     // }
  }