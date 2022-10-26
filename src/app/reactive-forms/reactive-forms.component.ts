import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

  get guest(){
    return this.formGroup.get('guest') as FormArray
  }

  formGroup: FormGroup

  creditCardForm:FormGroup




  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      roomId:[''],
      guestEmail:[''],
      checkinDate:[''],
      checkoutDate:[''],
      address: this.formBuilder.group({
        address1:[''],
        country:[''],
        zipCode:[''],
      }),
      guest: this.formBuilder.array([
        {guestName:[''],age:new FormControl('')}
      ])
    }),
    this.formGroup = this.formBuilder.group({
      name:('')
    })
    this.creditCardForm = this.formBuilder.group({
      creditCard:(''),
      firstName:(''),
      lastName:(''),

    })
  }
  submitForm(){
     console.log(this.formGroup.value)
  }

  addGuest(){
    this.guest.push(
      this.formBuilder.group({guestName:[''],age:new FormControl('')})
    )
  }


}
