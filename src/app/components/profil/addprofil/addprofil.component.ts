import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Profil } from 'src/app/Model/profil';
import { ProfilService } from 'src/services/profil.service';

@Component({
  selector: 'app-addprofil',
  templateUrl: './addprofil.component.html',
  styleUrls: ['./addprofil.component.css']
})
export class AddprofilComponent implements OnInit {

  
  myForm :FormGroup;
  @Output() aded = new EventEmitter<Profil>();
  profil:Profil;

  constructor(private profilserv:ProfilService) { }

  ngOnInit(): void {
    this.myForm=new FormGroup({
      IdProfil :new FormControl(),
      Pwd : new FormControl(),
      Metric: new FormControl(),
      Profession : new FormControl(),
      Domain: new FormControl(),
      FollowersNbr : new FormControl
    }) 
  }

  add(){
    this.profilserv.addProfil(this.myForm.value).subscribe();
  this.aded.emit(this.myForm.value);
  this.myForm.reset();
  window.location.reload();
  }

}
