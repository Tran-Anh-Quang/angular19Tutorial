import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule, NgIf],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {

  userObject: any  = {
    firstName: '',
    lastName: '',
    username: '',
    city: '',
    state: '',
    zip: '',
    isTermAgree: false
  }

  onSave(){
    debugger;
    const formValue = this.userObject;
  }
}