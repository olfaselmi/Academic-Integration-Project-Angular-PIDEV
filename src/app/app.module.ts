import {Component, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ForumComponent } from './components/forum/forum.component';
import { ChatComponent } from './components/chat/chat.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TravelComponent } from './components/travel/travel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {ComplaintComponent} from "./components/complaint/complaint.component";
import {AddcomplaintComponent} from "./components/complaint/addcomplaint/addcomplaint.component";
import {ComplaintstatisticComponent} from "./components/complaint/complaintstatistic/complaintstatistic.component";
import {StatisticsComponent} from "./components/complaint/statistics/statistics.component";
import { GoogleChartsModule } from 'angular-google-charts';
import {ReponseReclamationComponent} from "./components/complaint/reponse-reclamation/reponse-reclamation.component";
import {
  FormReponsereclamationComponent
} from "./components/complaint/form-reponsereclamation/form-reponsereclamation.component";
import {FormReclamationComponent} from "./components/complaint/form-reclamation/form-reclamation.component";
import { ResponseByUserComponent } from './components/complaint/response-by-user/response-by-user.component';


const routes: Routes = [

  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home', component:DashboardComponent},
  {path:'forum', component:ForumComponent},
  {path:'chat',component:ChatComponent},
  {path:"travel",component:TravelComponent},
  {path:"complaint",component:ComplaintComponent},
{path:"complaint/add/",component:AddcomplaintComponent},
  {path:"complaint/del:idComplaint",component:ComplaintComponent},
  {path:"statistics",component:StatisticsComponent},
  //{path:"C",component:ComplaintstatisticComponent},
  {path:'espaceReclamation',component:ReponseReclamationComponent},
  {path : 'listResponse' , component: ResponseByUserComponent}


];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    SideBarComponent,
    FooterComponent,
    ForumComponent,
    ChatComponent,
    TravelComponent,
   // EditopportunityComponent,
    ComplaintComponent,
    AddcomplaintComponent,
    ComplaintstatisticComponent,
    StatisticsComponent,
    ReponseReclamationComponent,
    FormReponsereclamationComponent,
    FormReclamationComponent,
    ResponseByUserComponent,


  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
