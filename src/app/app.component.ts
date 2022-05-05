import { Component } from '@angular/core';
import { SessionService } from 'src/services/session.service';
import { User } from './Model/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pidev';
  user2: User;
  data: any;
 /* constructor(private session:SessionService) {
  }
  getUserType():string{
    return this.session.getSessionType();
  }*/
}
