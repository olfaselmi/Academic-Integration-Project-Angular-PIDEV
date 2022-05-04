import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ConnectionComponent } from './connection/connection.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { MainUserComponent } from './main-user/main-user.component';
import { ProfilComponent } from './profil/profil.component';
import { UpdatePswFormComponent } from './update-psw-form/update-psw-form.component';
import { UserComponent } from './user/user.component';
import { UserFormComponent } from './user-form/user-form.component';


@NgModule({
  declarations: [
    ConnectionComponent,
    ForgetPasswordComponent,
    InscriptionComponent,
    MainUserComponent,
    ProfilComponent,
    UpdatePswFormComponent,
    UserComponent,
    UserFormComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
