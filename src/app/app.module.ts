import { NgModule } from '@angular/core';
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
import { AddtravelComponent } from './components/travel/addtravel/addtravel.component';
import { EdittravelComponent } from './components/travel/edittravel/edittravel.component';
import { CommonModule } from '@angular/common';
import { TravelplanningComponent } from './components/travelplanning/travelplanning.component';
import { VeiwPlanningsComponent } from './components/travelplanning/veiw-plannings/veiw-plannings.component';
import { OpportunityComponent } from './components/opportunity/opportunity.component';
import { AddopportunityComponent } from './components/opportunity/addopportunity/addopportunity.component';
import { EditopportunityComponent } from './components/opportunity/editopportunity/editopportunity.component';
import { EditplanningComponent } from './components/travelplanning/editplanning/editplanning.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { ProfilComponent } from './components/profil/profil.component';
import { AddprofilComponent } from './components/profil/addprofil/addprofil.component';
import { EditprofilComponent } from './components/profil/editprofil/editprofil.component';
import { AddquizComponent } from './components/quiz/addquiz/addquiz.component';
import { TripComponent } from './components/trip/trip.component';
import { AddtripComponent } from './components/trip/addtrip/addtrip.component';
import { MatchingComponent } from './components/matching/matching.component';

//primeng
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {ProgressSpinnerModule} from 'primeng/progressspinner';








const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: DashboardComponent },
  { path: 'forum', component: ForumComponent },
  { path: 'chat', component: ChatComponent },
  { path: "travel", component: TravelComponent },
  { path: "edit", component: EdittravelComponent },
  { path: "travel/:id", component: TravelplanningComponent },
  { path: "view", component: VeiwPlanningsComponent },
  { path: "opportunity", component: OpportunityComponent },
  { path: "Quiz", component: QuizComponent },
  { path: "Profil", component: ProfilComponent },
  { path: "trip", component: TripComponent },
  { path: "matching", component: MatchingComponent }
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
    AddtravelComponent,
    EdittravelComponent,
    TravelplanningComponent,
    VeiwPlanningsComponent,
    OpportunityComponent,
    AddopportunityComponent,
    EditopportunityComponent,
    EditplanningComponent,
    QuizComponent,
    ProfilComponent,
    AddprofilComponent,
    EditprofilComponent,
    AddquizComponent,
    TripComponent,
    AddtripComponent,
    MatchingComponent,


  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    TableModule, ButtonModule,
    InputTextModule,
    FormsModule,
    CommonModule,
    ProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
