import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Travel } from 'src/app/Model/Travel';
import { TravelService } from 'src/services/travel.service';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {
  show:true;

  ListTravels:Travel[];
  travel:Travel;
  showAdd = false; 
   searchVal="";

  constructor(private ac:ActivatedRoute, private travelServ:TravelService) { }
  
  ngOnInit(): void {

    this.travelServ.getAllTravelssFromServer().subscribe(res=>{
      this.ListTravels=res;
      
    console.log(this.ListTravels)
    
  });
  
  }
 
  deleteTravel(id:number){
    this.travelServ.deleteTravelById(id).subscribe(()=>this.travelServ.getAllTravelssFromServer()
      .subscribe(res=>{this.ListTravels=res})
    );
  }

  editTravel(x:Travel){
    this.show=true;
    this.travel=x;
    
  }
  
  editMyTravel(i :any){

  }
  

  showForm(){
    this.showAdd=true;
  }
  addTravel(i:Travel){
    this.ListTravels.push(i);
      }


    /*  ngOnDestroy(): void {
        this.dtTrigger.unsubscribe();

        $.fn.dataTable.ext.search.pop();
      } */
     





}