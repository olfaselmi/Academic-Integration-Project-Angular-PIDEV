import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/User';
import { SessionService } from 'src/services/session.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  codeI: string;
  registerForm: boolean
  error: boolean
  error2: boolean
  message: any;
  user: User = new User();
  inscriptionForm: FormGroup
  constructor(private fb: FormBuilder, private us: UserService, private route: Router, private session : SessionService) { }

  ngOnInit(): void {
    if (this.session.getUser() != null){
      this.route.navigate(['/users/profile'])
    }
    this.error2 = false;
    this.error = false
    this.registerForm = true
    this.inscriptionForm = this.fb.group(
      {
        'nom': ['', [Validators.required]],
        'prenom': ['', [Validators.required]],
        'datenaissance': ['', [Validators.required]],
        'email': ['', [Validators.required, Validators.email]],
        'psw': ['', [Validators.minLength(5),
          Validators.required,
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]],
        'confirmPsw': ['', Validators.required],
        'code': ['']
      }
    )
  }
  inscription(f: FormGroup) {

    this.user.FirstName = f.value.FirstName;
    this.user.LastName = f.value.LastName;
    this.user.Birthday= f.value.Birthday;
    this.user.Email = f.value.Email;
    this.user.Pwd = f.value.Pwd;
    this.user.urlpicture = "";
    this.user.token = "";
    this.user.badge = "Ordinaire";
    let resp = this.us.checkUser(f.value.email);
    resp.subscribe((data) => 
    {
      if (data == true) 
      {
        this.error2 = true;
      }else 
      {
        let response = this.us.sendMail(f.value.email)
        response.subscribe((data) => {
          this.codeI = data
        })
        this.registerForm = false;
      }
    })

  }
  confirmerCode() {
    if (this.inscriptionForm.value.code === this.codeI) {
      let response = this.us.doRegistration(this.user);
      response.subscribe();
      this.route.navigate(['/users/connexion']);
    } else {
      this.error = true;
    }

  }
}
