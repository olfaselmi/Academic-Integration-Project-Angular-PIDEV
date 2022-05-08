import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Opportunity } from 'src/app/Model/Opportunity';
import { OpportunityService } from 'src/services/opportunity.service';

@Component({
  selector: 'app-addopportunity',
  templateUrl: './addopportunity.component.html',
  styleUrls: ['./addopportunity.component.css']
})
export class AddopportunityComponent implements OnInit {

  myForm :FormGroup;
  @Output() aded = new EventEmitter<Opportunity>();
  opportunity:Opportunity;
  constructor(private opportunityServ:OpportunityService) { }

  ngOnInit(): void {
    
    this.myForm=new FormGroup({
      idOpportunity:new FormControl(),
      description: new FormControl(),
      date: new FormControl(),
      typeo: new FormControl()
     
    }) 
  }
  

  add(){
    this.opportunityServ.addOpportunity(this.myForm.value).subscribe();
  this.aded.emit(this.myForm.value);
  this.myForm.reset();
  window.location.reload();
  }

}
