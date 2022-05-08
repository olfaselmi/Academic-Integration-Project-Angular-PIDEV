import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TravelService } from 'src/services/travel.service';

@Component({
  selector: 'app-matching',
  templateUrl: './matching.component.html',
  styleUrls: ['./matching.component.css']
})
export class MatchingComponent implements OnInit {
  myForm:FormGroup;
  matching:any;
  constructor(private travelServ:TravelService) { }

  ngOnInit(): void {
    this.travelServ.GetFriend().subscribe(res=>{
      this.matching=res
      console.log(this.matching);
    }); 
 
  }
match(){
  this.travelServ.getMatchedFromServer().subscribe();
  alert("matching completed !")
  window.location.reload();
}
  
}
