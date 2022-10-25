import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

  formGroup: FormGroup


  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      roomId:[''],
      guestEmail:[''],
      checkinDate:[''],
      checkoutDate:[''],
      

    })
  }
  submitForm(){
     console.log(this.formGroup.value)
  }

}
