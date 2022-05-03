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
 /* allTravels: any = []; */

  constructor(private ac:ActivatedRoute, private travelServ:TravelService) { }
  


  ngOnInit(): void {
  // this.travels();
    this.travelServ.getAllTravelssFromServer().subscribe(res=>{
      this.ListTravels=res;
      
    console.log(this.ListTravels)
    
  });

  //filtering function
 /* $.fn.dataTable.ext.search.push((settings: any, data: string[], dataIndex: any) => {
    const id = parseFloat(data[0]) || 0; // use data for the id column
    return (Number.isNaN(this.min) && Number.isNaN(this.max)) ||
        (Number.isNaN(this.min) && id <= this.max) ||
        (this.min <= id && Number.isNaN(this.max)) ||
        (this.min <= id && id <= this.max);
  });

   this.dtOptions = {
    pagingType: 'full_numbers'
  }; */

  
  }

 /* filterById(): void {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.draw();
    });
  } */

 /* travels():void{
  this.travelServ.getAllTravelssFromServer().subscribe((response: any) => {
    this.allTravels = response.datatables;
    this.dtTrigger.next;
  });
  }*/

  

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