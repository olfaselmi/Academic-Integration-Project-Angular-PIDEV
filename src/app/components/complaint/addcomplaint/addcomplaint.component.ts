import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {ComplaintService} from "../../../../services/complaint.service";
import {Compalint} from "../../../Model/Compalint";
import {Router} from "@angular/router";

@Component({
  selector: 'app-addcomplaint',
  templateUrl: './addcomplaint.component.html',
  styleUrls: ['./addcomplaint.component.css']
})
export class AddcomplaintComponent implements OnInit {

  myForm :FormGroup;
  @Output() aded = new EventEmitter<Compalint>();
  compalint:Compalint;
  constructor(private compalintServ:ComplaintService, private router:Router) { }

  ngOnInit(): void {
    this.myForm=new FormGroup({
      idComplaint:new FormControl(),
      topic: new FormControl(),
      messageComplaint: new FormControl(),
      imageComplaint: new FormControl(),
      dateComplaint: new FormControl(),
      cloture: new FormControl(),
      id_complained: new FormControl(),
      id_complainer: new FormControl(),
      IdTrip: new FormControl()
    })
  }
  add(){
    this.compalintServ.addComplaint(this.myForm.value).subscribe();
    this.aded.emit(this.myForm.value);
    //this.myForm.reset();
    window.location.reload();
    //this.router.navigate(['/complaint/add/']);
    console.log(this.myForm);
  }

}
