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


  myForm: FormGroup;
  @Output() aded = new EventEmitter<Profil>();
  profil: Profil;

  constructor(private profilserv: ProfilService) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      idProfil: new FormControl(),
      pwd: new FormControl(),
      metric: new FormControl(),
      profession: new FormControl(),
      domain: new FormControl(),
      followersNbr: new FormControl
    })
  }

  add(id: any) {
    console.log(this.myForm.value)
    this.profilserv.addProfil(id, this.myForm.value).subscribe();
    this.aded.emit(this.myForm.value);
    this.myForm.reset();
    window.location.reload();
  }

}
