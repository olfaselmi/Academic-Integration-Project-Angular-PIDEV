import { Component, OnInit } from '@angular/core';
import { Opportunity } from 'src/app/Model/Opportunity';
import { OpportunityService } from 'src/services/opportunity.service';

@Component({
  selector: 'app-opportunitystatistic',
  templateUrl: './opportunitystatistic.component.html',
  styleUrls: ['./opportunitystatistic.component.css']
})
export class OpportunitystatisticComponent implements OnInit {

  ListOpportunity:Opportunity[];
  productSales: any[]
  productSalesMulti: any[]
  Stat:any
  view: any[] = [700, 370];

  // options
  showLegend: boolean = true;
  showLabels: boolean = true;

  gradient: boolean = false;
  isDoughnut: boolean = true;

  legendPosition: string = 'below';

  colorScheme = {
    domain: ['#704FC4', '#4B852C', '#B67A3D', '#5B6FC8', '#25706F']
  };



  constructor(private opportunityServ:OpportunityService ) { }

  ngOnInit(): void {
    this.opportunityServ.getstatisticsoppFromServer().subscribe(res=>{
      this.Stat=res;
    
      console.log("hhh"+this.Stat.map(i=>i.total));
  })
  
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }
}