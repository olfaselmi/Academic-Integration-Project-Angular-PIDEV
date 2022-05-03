


import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Travel } from 'src/app/Model/Travel';
import { TravelService } from 'src/services/travel.service';


@Component({
  selector: 'app-edittravel',
  templateUrl: './edittravel.component.html',
  styleUrls: ['./edittravel.component.css']
})
export class EdittravelComponent implements OnInit {

  @Input() Travel:Travel = new Travel();

  @Output() edited = new EventEmitter<Travel>();

  myForm:FormGroup;
  constructor(private travelServ:TravelService, private router: Router) { }

  ngOnInit(): void {
    
    this.myForm=new FormGroup({
    
      idTravel : new FormControl (this.Travel.idTravel,Validators.required),
      destination : new FormControl (this.Travel.destination,Validators.required),
      startDate : new FormControl (this.Travel.startDate,Validators.required),
      endDate : new FormControl (this.Travel.startDate,Validators.required),
      objet : new FormControl (this.Travel.objet,Validators.required),

    }) 

  }

  reloadComponent() {
    let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
    }
 
  edit(){

    this.Travel.idTravel = this.myForm.get('idTravel').value;
    let id = this.myForm.get('idTravel').value;
    this.Travel.destination = this.myForm.get('destination').value;
    this.Travel.objet = this.myForm.get('objet').value;
    console.log(this.Travel);
  this.travelServ.updateTravel(id,this.Travel).subscribe()

  this.reloadComponent();
  window.location.reload();
}



}
