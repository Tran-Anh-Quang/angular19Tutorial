import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {

  userList: any[] = [];

  companyList: any[] = [];

  constructor(private readonly http: HttpClient) { }

  getuser() {
    this.http.get('https://json-placeholder.mock.beeceptor.com/users')
    .subscribe((response: any) => {
      this.userList = response;
    })
  }

  getCompany() {
    this.http.get('https://json-placeholder.mock.beeceptor.com/companies')
    .subscribe((response: any) => {
      this.companyList = response;
    })
  }

}
