import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { Travel } from 'src/app/Model/Travel';
import { Trip } from 'src/app/Model/trip';
import { TravelService } from 'src/services/travel.service';
import { TripService } from 'src/services/trip.service';

@Component({
  selector: 'app-addtrip',
  templateUrl: './addtrip.component.html',
  styleUrls: ['./addtrip.component.css']
})
export class AddtripComponent implements OnInit {

  myForm: FormGroup;
  @Output() aded = new EventEmitter<Trip>();
  travel: Trip;

  constructor(private travelServ: TripService, private fb: FormBuilder) { }

  ngOnInit(): void {

    this.myForm = this.fb.group({
      idTrip: new FormControl(null, [Validators.required]),
      domain: new FormControl(null, [Validators.required]),
      duration: new FormControl(null, [Validators.required]),
      dateBegin: new FormControl(null, [Validators.required]),
      destination: new FormControl(null, [Validators.required]),
      dateEnd: new FormControl(null, [Validators.required]),
      codeMatche: new FormControl(null, [Validators.required]),
      userId: new FormControl(null, [Validators.required]),

    }, {
      validator: Validators.compose([
        this.dateLessThan('dateBegin', 'dateEnd', { 'loaddate': true }),
        //this.dateLessThan('cargoLoadDate', 'cargoDeliveryDate', { 'cargoloaddate': true })
      ])
    })

  }

  add() {
    this.travelServ.addTrip(this.myForm.value, this.myForm.get('userId').value).subscribe(() => {
      console.log('sent')
    }, (err) => {
      console.log(err)
    });
    this.aded.emit(this.myForm.value);
    this.myForm.reset();
    // window.location.reload();
  }


  dateLessThan(dateField1: string, dateField2: string, validatorField: { [key: string]: boolean }): ValidatorFn {
    return (c: AbstractControl): { [key: string]: boolean } | null => {
      const date1 = c.get(dateField1).value;
      const date2 = c.get(dateField2).value;
      if ((date1 !== null && date2 !== null) && date1 > date2) {
        return validatorField;
      }
      return null;
    };
  }

}
