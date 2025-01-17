import { Component, isSignal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  userForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(5)]),
    userName: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl('Hanoi'),
    zip: new FormControl(''),
    isTermAgree: new FormControl(false),
  });

  constructor () {
    this.userForm.controls['state'].disable();
    setTimeout(() => {
      this.userForm.controls['state'].enable();
    }, 5000);
   }

  onSave() {
    const isValid = this.userForm.valid;
    const user = this.userForm.value;
    debugger;
  }
}
