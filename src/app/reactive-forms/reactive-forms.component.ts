import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormArray,
  FormControl,
  Validators,
} from '@angular/forms';
import { exhaustMap } from 'rxjs/internal/operators/exhaustMap';
import { mergeMap } from 'rxjs/internal/operators/mergeMap';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { ReactiveFormsService } from './reactive-forms.service';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css'],
})
export class ReactiveFormsComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private reactiveService: ReactiveFormsService
  ) {}

  get guest() {
    return this.formGroup.get('guest') as FormArray;
  }

  formGroup: FormGroup;

  ngOnInit(): void {
    (this.formGroup = this.formBuilder.group(
      {
        roomId: ['2'],
        guestEmail: [
          '',
          {
            validators: [
              Validators.required,
              Validators.email,
              Validators.minLength(10),
            ],
            updateOn: 'blur',
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
      },
      {
        updateOn: 'change',
      }
    )),
      this.getFormData();

    this.formGroup.valueChanges.subscribe((data) => {
      console.log(data);
    });
    this.formGroup.valueChanges
      .pipe(exhaustMap((data) => this.reactiveService.post(data)))
      .subscribe((data) => {
        console.log(data);
      });
  }
  submitForm() {
    console.log(this.formGroup.value);
    this.reactiveService
      .post(this.formGroup.getRawValue())
      .subscribe((data) => {
        console.log(data);
      });
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
  getFormData() {
    this.formGroup.patchValue({
      roomId: [],
    });
  }
}
