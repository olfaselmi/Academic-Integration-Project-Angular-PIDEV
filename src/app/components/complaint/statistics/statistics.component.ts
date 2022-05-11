import { Component, OnInit } from '@angular/core';
import { Travel } from 'src/app/Model/Travel';
import { TravelService } from 'src/services/travel.service';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  ListTravels:Travel[];
  productSales: any[]
  productSalesMulti: any[]
  Stat:any
  view: any[] = [700, 370];

  nbrTravel:number;
  // options
  showLegend: boolean = true;
  showLabels: boolean = true;

  gradient: boolean = false;
  isDoughnut: boolean = true;

  legendPosition: string = 'below';

  colorScheme = {
    domain: ['#704FC4', '#4B852C', '#B67A3D', '#5B6FC8', '#25706F']
  };



  constructor( ) { }

  ngOnInit(): void {


  }




}



