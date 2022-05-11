import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Profil } from 'src/app/Model/profil';
import { ProfilService } from 'src/services/profil.service';
import { TravelService } from 'src/services/travel.service';

@Component({
  selector: 'app-editprofil',
  templateUrl: './editprofil.component.html',
  styleUrls: ['./editprofil.component.css']
})
export class EditprofilComponent implements OnInit {

  @Input() profil:Profil = new Profil();

  @Output() edited = new EventEmitter<Profil>();

  myForm:FormGroup;
  constructor(private profilserv:ProfilService, private router: Router) { }

  ngOnInit(): void {
    
    this.myForm=new FormGroup({
    
      IdProfil : new FormControl (this.profil.IdProfil,Validators.required),
      Pwd : new FormControl (this.profil.pwd,Validators.required),
      Metric   : new FormControl (this.profil.metric,Validators.required),
      Profession : new FormControl (this.profil.Profession,Validators.required), 
      Domain : new FormControl (this.profil.domain,Validators.required),
      FollowersNbr: new FormControl (this.profil.followersNbr,Validators.required),
    }) 
  
}
reloadComponent() {
  let currentUrl = this.router.url;
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate([currentUrl]);
  }

edit(){

  this.profil.IdProfil = this.myForm.get('IdProfil').value;
  let id = this.myForm.get('IdProfil').value;
  this.profil.pwd = this.myForm.get('Pwd').value;
  this.profil.metric = this.myForm.get('Metric').value;
  console.log(this.profil);
this.profilserv.updateProfil(id,this.profil).subscribe()

this.reloadComponent();
window.location.reload();
}
}
