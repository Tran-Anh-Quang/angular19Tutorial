import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalComponent {

  fistName = signal('John');

  lastName = signal<string>('Doe');

  courseName: string = 'Angular';

  rollNo = signal<number>(0);

  constructor() {
    const value = this.fistName();
    setTimeout(() => {
      debugger;
      this.courseName = 'React';
      this.fistName.set('Jane');
      debugger;
    }, 5000);
  }

  onIncrement() {
    this.rollNo.update((oldValue) => oldValue + 1);
  }
}
