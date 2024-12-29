import { Component } from '@angular/core';

import { NgStyleComponent } from "./components/ng-style/ng-style.component";

@Component({
  selector: 'app-root',
  imports: [NgStyleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular19Tutorial';
}
