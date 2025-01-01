import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-statement',
  imports: [FormsModule],
  templateUrl: './control-statement.component.html',
  styleUrl: './control-statement.component.css',
  standalone: true,
})
export class ControlStatementComponent {
  div1Visible: boolean = true;
  isChecked: boolean = false;
  dayName: string = '';
  cityLists: string[] = ['mon', 'tue', 'wed', 'thu', 'fri'];
  employeeList: any[] = [
    { id: 1, name: "John", age: 25, city: "New York" },
    { id: 2, name: "Jane", age: 30, city: "London" },
    { id: 3, name: "Bob", age: 35, city: "Paris" },
    { id: 4, name: "Alice", age: 40, city: "Tokyo" },
  ];

  hideAndShowDiv1(isVisible: boolean) {
    this.div1Visible = isVisible;
  }
}
