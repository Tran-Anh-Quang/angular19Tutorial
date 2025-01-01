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

  hideAndShowDiv1(isVisible: boolean) {
    this.div1Visible = isVisible;
  }
}
