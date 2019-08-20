import { Component, OnInit } from '@angular/core';
import { Cars } from '../cars.model';
import { CarsService } from '../cars.service';
import { MatTableDataSource } from '@angular/material'
import { Router } from '@angular/router';
@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  cars: Cars[];
  displayedColumns = ['make', 'model', 'year', 'transmission', 'type', 'actions'];
  constructor(private carsService: CarsService, private router: Router) { }

  ngOnInit() {
    this.fetchCars();
  }
  fetchCars() {
    this.carsService.getCars().subscribe((data: Cars[]) => {
      this.cars = data;
      console.log(this.cars);
    });
  }
  editCar(id) {
    console.log(id)
    this.router.navigate([`/edit/${id}`]);
  }

  deleteCar(id) {
    this.carsService.deleteCarById(id).subscribe(() => {
      this.fetchCars();
    });
  }
}
