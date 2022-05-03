import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TravelPlanning } from 'src/app/Model/TravelPlanning';
import { TravelplanningService } from 'src/services/travelplanning.service';

@Component({
  selector: 'app-editplanning',
  templateUrl: './editplanning.component.html',
  styleUrls: ['./editplanning.component.css']
})
export class EditplanningComponent implements OnInit {

  @Input() TravelPlanning:TravelPlanning = new TravelPlanning();

  @Output() edited = new EventEmitter<TravelPlanning>();

  myForm:FormGroup;
  constructor(private travelPlanningServ:TravelplanningService, private router: Router) { }

  ngOnInit(): void {
    
    this.myForm=new FormGroup({
    
      idPlanning : new FormControl (this.TravelPlanning.idPlanning,Validators.required),
      day : new FormControl (this.TravelPlanning.day,Validators.required),
      description : new FormControl (this.TravelPlanning.description,Validators.required),
      schedule : new FormControl (this.TravelPlanning.schedule,Validators.required),
     

    }) 

  }

  reloadComponent() {
    let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
    }
 
  edit(){

    this.TravelPlanning.idPlanning = this.myForm.get('idPlanning').value;
    let id = this.myForm.get('idPlanning').value;
    this.TravelPlanning.day = this.myForm.get('day').value;
    this.TravelPlanning.description = this.myForm.get('description').value;
    console.log(this.TravelPlanning);
  this.travelPlanningServ.updateTravelPlanning(id,this.TravelPlanning).subscribe()

  this.reloadComponent();
  window.location.reload();
}



}
