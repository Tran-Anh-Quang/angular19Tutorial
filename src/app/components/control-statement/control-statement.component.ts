import { Component } from '@angular/core';

@Component({
  selector: 'app-control-statement',
  imports: [],
  templateUrl: './control-statement.component.html',
  styleUrl: './control-statement.component.css',
  standalone: true,
})
export class ControlStatementComponent {
  div1Visible: boolean = true;

  hideAndShowDiv1(isVisible: boolean) {
    this.div1Visible = isVisible;
  }
}
