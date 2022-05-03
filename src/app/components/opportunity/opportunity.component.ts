import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Opportunity } from 'src/app/Model/Opportunity';
import { OpportunityService } from 'src/services/opportunity.service';

@Component({
  selector: 'app-opportunity',
  templateUrl: './opportunity.component.html',
  styleUrls: ['./opportunity.component.css']
})
export class OpportunityComponent implements OnInit {

  Listopportunities:Opportunity[];
  constructor(private ac:ActivatedRoute, private opportunityServ:OpportunityService) { }
showAdd = false;
  ngOnInit(): void {

    this.opportunityServ.getAllOpportunities().subscribe(res=>{this.Listopportunities=res;});
  }

  deleteOpportunity(id:number){
    this.opportunityServ.deleteopportunityById(id).subscribe(()=>this.opportunityServ.getAllOpportunities()
      .subscribe(res=>{this.Listopportunities=res})
    );
  }
  showForm(){
    this.showAdd=true;
  }
  addOpportunity(i:Opportunity){
    this.Listopportunities.push(i);
      }

  }


