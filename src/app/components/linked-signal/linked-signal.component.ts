import { Component, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-linked-signal',
  imports: [],
  templateUrl: './linked-signal.component.html',
  styleUrl: './linked-signal.component.css'
})
export class LinkedSignalComponent {

  firstName = signal('john');

  lastName = signal('doe');

  fullName = linkedSignal({
    source: this.firstName,
    computation: (newOptions, previous) => {
      debugger;
      const fullName = newOptions + ' ' + this.lastName();
      return fullName;
    }
  })

  user = signal({
    id: '111',
    firstName: 'John'
  })

  email = linkedSignal({
    source: this.user,
    computation: (user: any) => `${user.firstName + user.id}@gmail.com`,
    equal: (a: any, b: any) => a.id !== b.id
  })

  changeFirstName() {
    this.firstName.set('Jane');
  }

  changeId() {
    this.user.set({
      id: '222',
      firstName: 'Jane'
    })
  }
  
}
