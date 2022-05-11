import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatchingService } from 'src/services/matching.service';
import Swal from "sweetalert2"

@Component({
  selector: 'app-matching',
  templateUrl: './matching.component.html',
  styleUrls: ['./matching.component.css']
})
export class MatchingComponent implements OnInit {
  myForm: FormGroup;
  matchForm: FormGroup;
  myFormSearch: FormGroup;
  listTrips: any = []
  isLoading: boolean = false;


  constructor(private matchingServ: MatchingService, private fb: FormBuilder) { }

  ngOnInit(): void {

    this.myForm = this.fb.group({
      idu: [null, Validators.required],
      idt: [null, Validators.required],
    })

    this.matchForm = this.fb.group({
      idu: [null, Validators.required],
      idt: [null, Validators.required],
    })

    this.myFormSearch = this.fb.group({
      idu: [null, Validators.required],
    })



  }

  add() {
    console.log(this.myForm.value)
    this.matchingServ.getMatch(parseInt(this.myForm.get('idu').value), parseInt(this.myForm.get('idt').value)).subscribe((res) => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Matched succefully",
        showConfirmButton: false,
        timer: 1500,
      })
    }, err => {
      console.error(err)
      Swal.fire({
        position: "center",
        icon: "error",
        title: "error has been occured",
        showConfirmButton: false,
        timer: 1500,
      })
    })
  }

  match() {
    console.log(this.matchForm.value);
    this.matchingServ.match(parseInt(this.matchForm.get('idu').value), parseInt(this.matchForm.get('idt').value)).subscribe(res => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Matched succefully",
        showConfirmButton: false,
        timer: 1500,
      })

    }, err => {
      console.error(err)
      Swal.fire({
        position: "center",
        icon: "error",
        title: "error has been occured",
        showConfirmButton: false,
        timer: 1500,
      })
    })
  }

  getListTri(idu: number) {
    this.isLoading = true;
    setInterval(() => {
      this.matchingServ.getTripsWithDate(idu).subscribe(res => {
        this.listTrips = res
        this.isLoading = false;
        console.log(res)
      }, err => {
        this.isLoading = false;
        console.log(err)
      })
    }, 5000);



  }

  get() {
    this.getListTri(parseInt(this.myFormSearch.get('idu').value))
  }



}
