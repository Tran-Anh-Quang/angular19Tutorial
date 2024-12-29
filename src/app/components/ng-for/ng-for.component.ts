import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  imports: [NgFor],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {
  cityList: string[] = ["New York", "London", "Paris", "Tokyo"];

  employeeList: any[] = [
    { id: 1, name: "John", age: 25, city: "New York" },
    { id: 2, name: "Jane", age: 30, city: "London" },
    { id: 3, name: "Bob", age: 35, city: "Paris" },
    { id: 4, name: "Alice", age: 40, city: "Tokyo" },
  ];
}
