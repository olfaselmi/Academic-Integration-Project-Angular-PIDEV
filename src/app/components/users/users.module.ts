import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { InscriptionComponent } from './inscription/inscription.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UsersRoutingModule,
    InscriptionComponent,

  ]
})
export class UsersModule { }
