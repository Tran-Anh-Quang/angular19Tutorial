import { Component } from '@angular/core';

import { NgClassComponent } from "./components/ng-class/ng-class.component";

@Component({
  selector: 'app-root',
  imports: [NgClassComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular19Tutorial';
}
