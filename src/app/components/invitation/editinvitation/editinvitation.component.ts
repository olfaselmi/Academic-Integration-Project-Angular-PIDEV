import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { invitation } from 'src/app/Model/Invitation';
import { InvitationService } from 'src/services/invitation.service';


@Component({
  selector: 'app-editinvitation',
  templateUrl: './editinvitation.component.html',
  styleUrls: ['./editinvitation.component.css']
})
export class EditinvitationComponent implements OnInit {

  @Input() invitation:invitation = new invitation();

  @Output() edited = new EventEmitter<invitation>();

  myForm:FormGroup;
  constructor(private invitationServ:InvitationService, private router: Router) { }

  ngOnInit(): void {
    
    this.myForm=new FormGroup({
    
      idinvitation : new FormControl (this.invitation.IdInvi,Validators.required),
      State : new FormControl (this.invitation.State,Validators.required),
      Email : new FormControl (this.invitation.Email,Validators.required),
  

    }) 

  }

  reloadComponent() {
    let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
    }
 
  edit(){

    this.invitation.IdInvi = this.myForm.get('idOpportunity').value;
    let id = this.myForm.get('idinvitation').value;
    this.invitation.State = this.myForm.get('State').value;
    this.invitation.Email = this.myForm.get('Email').value;
   
    console.log(this.invitation);
  this.invitationServ.updateInvitation(id,this.invitation).subscribe()

  this.reloadComponent();
  window.location.reload();
}



}