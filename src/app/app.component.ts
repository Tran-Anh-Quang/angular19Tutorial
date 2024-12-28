import { Component } from '@angular/core';
import { DataBindingComponent } from "./components/data-binding/data-binding.component";
import { AdminComponent } from "./components/admin/admin.component";
import { NgIfComponent } from "./components/ng-if/ng-if.component";

@Component({
  selector: 'app-root',
  imports: [DataBindingComponent, AdminComponent, NgIfComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular19Tutorial';
}
