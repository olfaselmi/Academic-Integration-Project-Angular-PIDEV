import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { Opportunity } from 'src/app/Model/Opportunity';
import { OpportunityService } from 'src/app/services/opportunity.service';

@Component({
  selector: 'app-opportunity',
  templateUrl: './opportunity.component.html',
  styleUrls: ['./opportunity.component.css']
})
export class OpportunityComponent implements OnInit {
 // dtOptions: DataTables.Settings = {};
 // dtTrigger: Subject<any> = new Subject<any>();
 show:true;
 opportunity:Opportunity;

  Listopportunities:Opportunity[];
  constructor(private ac:ActivatedRoute, private opportunityServ:OpportunityService) { }
showAdd = false;
  ngOnInit(): void {

    this.opportunityServ.getAllOpportunities().subscribe((res:any)=>{this.Listopportunities=res;
   //   this.dtTrigger.next(1);
    });
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

      editOpportunity(x:Opportunity){
        this.show=true;
        this.opportunity=x;
        
      }
      
      editMyOpportunity(i :any){
    
      }

     // ngOnDestroy(): void {
     //   this.dtTrigger.unsubscribe();
     // }
  }
 


