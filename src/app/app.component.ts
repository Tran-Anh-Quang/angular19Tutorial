import { Component } from '@angular/core';
import { ControlStatementComponent } from "./components/control-statement/control-statement.component";


@Component({
  selector: 'app-root',
  imports: [ControlStatementComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular19Tutorial';
}
