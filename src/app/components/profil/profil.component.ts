import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profil } from 'src/app/Model/profil';
import { ProfilService } from 'src/services/profil.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  show:true;

  ListProfils:Profil[];
  profil:Profil;
  showAdd = false; 
   searchVal="";
 /* all: any = []; */

  constructor(private ac:ActivatedRoute, private profilserv:ProfilService) { }
  


  ngOnInit(): void {
  
    this.profilserv.getAllProfilsFromServer().subscribe(res=>{
      this.ListProfils=res;
      
    console.log(this.ListProfils)
    
  });
  

  }
  
  deleteprofil(id:number){
    this.profilserv.deleteProfilById(id).subscribe(()=>this.profilserv.getAllProfilsFromServer()
      .subscribe(res=>{this.ListProfils=res})
    );
  }

  editprofil(x:Profil){
    this.show=true;
    this.profil=x;
    
  }
  
  editMyProfil(i :any){

  }
  

  showForm(){
    this.showAdd=true;
  }
  addprofil(i:Profil){
    this.ListProfils.push(i);
      }

}

