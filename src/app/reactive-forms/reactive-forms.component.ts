import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormArray,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css'],
})
export class ReactiveFormsComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  get guest() {
    return this.formGroup.get('guest') as FormArray;
  }

  formGroup: FormGroup;

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      roomId: ['2'],
      guestEmail: [
        '',
        {
          validators: [
            Validators.required,
            Validators.email,
            Validators.minLength(10),
          ],
        },
      ],
      checkinDate: [''],
      checkoutDate: [''],
      address: this.formBuilder.group({
        address1: [
          '',
          { validators: [Validators.minLength(5), Validators.required] },
        ],
        country: [''],
        zipCode: [''],
      }),
      guest: this.formBuilder.array([
        { guestName: [''], age: new FormControl('') },
      ]),
    });
  }
  submitForm() {
    console.log(this.formGroup.value);
    this.formGroup.reset({
      roomId: '',
      guestEmail: '',
      checkinDate: '',
      checkoutDate: '',
      address: {
        address1: '',
        country: '',
        zipCode: '',
      },
    });
  }

  addGuest() {
    this.guest.push(
      this.formBuilder.group({ guestName: [''], age: new FormControl('') })
    );
  }
}
