import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { invitation } from 'src/app/Model/Invitation';
import { InvitationService } from 'src/services/invitation.service';

@Component({
  selector: 'app-addinvitation',
  templateUrl: './addinvitation.component.html',
  styleUrls: ['./addinvitation.component.css']
})
export class AddinvitationComponent implements OnInit {

  myForm :FormGroup;
  @Output() aded = new EventEmitter<invitation>();
  invitation:invitation;
  constructor(private invitationServ:InvitationService) { }

  ngOnInit(): void {
    
    this.myForm=new FormGroup({
      idInvi:new FormControl(),
      Email: new FormControl(),
      State: new FormControl(),
     
    }) 
  }
  

  add(){
    this.invitationServ.addInvitation(this.myForm.value).subscribe();
  this.aded.emit(this.myForm.value);
  this.myForm.reset();
  window.location.reload();
  }

}