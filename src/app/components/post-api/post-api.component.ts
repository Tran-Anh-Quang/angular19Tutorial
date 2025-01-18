import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-api',
  imports: [FormsModule],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent {

  carList: any[] = [];
  
  car: any = {
    "carId": 0,
    "brand": "",
    "model": "",
    "year": "",
    "color": "",
    "dailyRate": "",
    "carImage": "",
    "regNo": ""
  }

  http = inject(HttpClient);

  getAllCars() {
    this.http.get('/api/CarRentalApp/GetCars')
    .subscribe((response: any) => {
      this.carList = response.data;
      console.log(this.carList);
    });
  }

  saveCar() {
    this.http.post('/api/CarRentalApp/CreateNewCar', this.car)
    .subscribe((response: any) => {
      if(response.result) {
        alert('Car saved successfully');
        this.getAllCars();
      } else {
        alert(response.message);
      }
    });
  }

  editCar(data: any) {
    this.car = data;
  }

  updateCar() {
    this.http.put('/api/CarRentalApp/UpdateCar', this.car)
    .subscribe((response: any) => {
      if(response.result) {
        alert('Car updated successfully');
        this.getAllCars();
      } else {
        alert(response.message);
      }
    });
  }

}
