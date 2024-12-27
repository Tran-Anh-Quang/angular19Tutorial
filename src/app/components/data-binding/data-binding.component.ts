import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  firstName: string = 'John';
  rollNo: number = 1;
  isActive: boolean = true;
  currentDate: Date = new Date();
  myPlaceholder: string = 'Enter your name';
  div1ClassName: string = 'bg-primary';

  constructor() { 
    console.log(this.firstName);

    this.isActive = false;
    console.log(this.isActive);
    this.showWelcomeMessage();
    
  }

  showWelcomeMessage() {
    alert('Welcome to Angular!');
  }
}
