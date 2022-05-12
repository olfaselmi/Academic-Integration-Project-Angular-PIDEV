import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Profil } from 'src/app/Model/profil';
import { ProfilService } from 'src/services/profil.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  show: true;
  profileId: any

  ListProfils: Profil[];
  profil: Profil;
  showAdd = false;
  searchVal = "";
  display: boolean = false;
  displayEdit: boolean = false;
  displayPopularity: boolean = false;


  myForm: FormGroup;
  myFormEdit: FormGroup;
  badge: any



  /* all: any = []; */

  constructor(private ac: ActivatedRoute, private profilserv: ProfilService) { }



  ngOnInit(): void {

    this.profilserv.getAllProfilsFromServer().subscribe(res => {
      this.ListProfils = res;

      console.log(this.ListProfils)

    });

    this.myForm = new FormGroup({
      idProfil: new FormControl(),
      pwd: new FormControl(),
      metric: new FormControl(),
      profession: new FormControl(),
      domain: new FormControl(),
      followersNbr: new FormControl
    })

    this.myFormEdit = new FormGroup({
      idProfil: new FormControl(),
      pwd: new FormControl(),
      metric: new FormControl(),
      profession: new FormControl(),
      domain: new FormControl(),
      followersNbr: new FormControl
    })
  }

  showDialog() {
    this.display = true;
  }

  closeDialogEdit() {
    this.displayEdit = false;

  }


  showDialogEdit(item: any) {
    this.displayEdit = true;
    this.loadData(item)
    this.profileId = item.idProfil
    console.log(this.profileId)
  }

  deleteprofil(id: number) {
    this.profilserv.deleteProfilById(id).subscribe(() => this.profilserv.getAllProfilsFromServer()
      .subscribe(res => { this.ListProfils = res })
    );
  }

  editprofil(x: Profil) {
    this.show = true;
    this.profil = x;

  }

  editMyProfil(i: any) {

  }

  update() {
    console.log(this.profileId)
    this.profilserv.updateProfil(0, this.profileId, this.myFormEdit.get('pwd').value, this.myFormEdit.get('metric').value, this.myFormEdit.get('profession').value, this.myFormEdit.get('domain').value, this.myFormEdit.get('followersNbr').value).subscribe(() => {
      console.log('success')
      this.profilserv.getAllProfilsFromServer().subscribe(res => {
        this.ListProfils = res;

        console.log(this.ListProfils)

      });

    }, err => {
      console.error(err)
    })
  }


  showForm() {
    this.showAdd = true;
  }

  addprofil(id: any, i: Profil) {
    this.profilserv.addProfil(id, i).subscribe(() => this.profilserv.getAllProfilsFromServer().subscribe(res => { this.ListProfils = res }));
  }

  add(id: any) {
    this.profilserv.addProfil(id, this.myForm.value).subscribe();
    //this.aded.emit(this.myForm.value);
    this.myForm.reset();
    window.location.reload();
  }

  loadData(item: any) {
    this.myFormEdit?.get("pwd")?.patchValue(item.pwd);
    this.myFormEdit?.get("metric")?.patchValue(item.metric);
    this.myFormEdit?.get("profession")?.patchValue(item.profession);
    this.myFormEdit?.get("domain")?.patchValue(item.domain);
    this.myFormEdit?.get("followersNbr")?.patchValue(item.followersNbr);
  }

  getPopulaity(id: any) {
    this.profilserv.getPopularity(id).subscribe(res => {
      console.log(res)
      this.badge = res

    }, err => console.log(err))

    this.displayPopularity = true
  }


}

