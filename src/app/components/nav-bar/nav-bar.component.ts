import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/user';
import { AuthenticationService } from 'src/services/authentication.service';
import { SessionService } from 'src/services/session.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  username = ''
  password = ''
  invalidLogin = false
  user2: User;
  data: any;
  check1: boolean;
  check2: boolean;
  check3: boolean;
  check4: boolean;
  
  listCatP:any;
  
  checkRec:boolean;
  
  constructor(public router: Router , private session : SessionService, public loginService:AuthenticationService) { }

  ngOnInit(): void {
    //this.service.afficherCategoriesProduit().subscribe((data)=>this.listCatP=data);
    this.user2;
    this.check1 = true;
    this.check2 = false;
    this.check3 = false;
    this.check4 = false;
    this.checkRec = false;
  }
  
changeCheck1() {
  this.check1 = true;
  this.check2 = false;
  this.check3 = false;
  this.check4 = false;
  this.checkRec = false;
}
changeCheck2() {
  this.check1 = false;
  this.check2 = true;
  this.check3 = false;
  this.check4 = false;
  this.checkRec = false;
}
changeCheck3() {
  this.check1 = false;
  this.check2 = false;
  this.check3 = true;
  this.check4 = false;
  this.checkRec = false;
}
changeCheck4() {
  this.check1 = false;
  this.check2 = false;
  this.check3 = false;
  this.check4 = true;
  this.checkRec = false;
}
changeCheckRec(){
  this.check1 = false;
  this.check2 = false;
  this.check3 = false;
  this.check4 = false;
  this.checkRec = true;
}
/*getUserType(): string {
  return this.session.getSessionType();
}*/

disconnect() {
  this.session.clearSession();
  this.router.navigate(['/home']);
}
  checkLogin() {
    if (this.loginService.authenticate(this.username, this.password)
    ) {
      this.username = this.username;
      this.router.navigate([''])
      this.invalidLogin = false
    } else
      this.invalidLogin = true
  }
}





