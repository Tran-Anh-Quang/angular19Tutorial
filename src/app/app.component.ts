import { Component } from '@angular/core';
import { ControlStatementComponent } from "./components/control-statement/control-statement.component";
import { SignalComponent } from "./components/signal/signal.component";
import { LinkedSignalComponent } from "./components/linked-signal/linked-signal.component";


@Component({
  selector: 'app-root',
  imports: [ControlStatementComponent, SignalComponent, LinkedSignalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular19Tutorial';
}