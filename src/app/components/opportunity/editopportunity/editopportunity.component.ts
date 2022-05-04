import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Opportunity } from 'src/app/Model/Opportunity';
import { OpportunityService } from 'src/services/opportunity.service';

@Component({
  selector: 'app-editopportunity',
  templateUrl: './editopportunity.component.html',
  styleUrls: ['./editopportunity.component.css']
})
export class EditopportunityComponent implements OnInit {

  @Input() Opportunity:Opportunity = new Opportunity();

  @Output() edited = new EventEmitter<Opportunity>();

  myForm:FormGroup;
  constructor(private opportunityServ:OpportunityService, private router: Router) { }

  ngOnInit(): void {
    
    this.myForm=new FormGroup({
    
      idOpportunity : new FormControl (this.Opportunity.idOpportunity,Validators.required),
      date : new FormControl (this.Opportunity.date,Validators.required),
      description : new FormControl (this.Opportunity.description,Validators.required),
      typeo : new FormControl (this.Opportunity.typeo,Validators.required),
  

    }) 

  }

  reloadComponent() {
    let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
    }
 
  edit(){

    this.Opportunity.idOpportunity = this.myForm.get('idOpportunity').value;
    let id = this.myForm.get('idOpportunity').value;
    this.Opportunity.date = this.myForm.get('date').value;
    this.Opportunity.description = this.myForm.get('description').value;
    this.Opportunity.typeo = this.myForm.get('typeo').value;
    console.log(this.Opportunity);
  this.opportunityServ.updateOpportunity(id,this.Opportunity).subscribe()

  this.reloadComponent();
  window.location.reload();
}



}