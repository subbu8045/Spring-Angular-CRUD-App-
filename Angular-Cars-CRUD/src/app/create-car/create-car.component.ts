import { Component, OnInit } from '@angular/core';
import { CarsService } from 'src/app/cars.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent implements OnInit {

  createForm: FormGroup;

  constructor(private carService: CarsService, private fb: FormBuilder, private router: Router) {
    this.createForm = this.fb.group({
      make: ['', Validators.required],
      model: '',
      year: '',
      transmission: '',
      type: ''
    });
   }
  addCar(make, model, year, transmission, type) {
    this.carService.addCar(make, model, year, transmission, type).subscribe(() => {
      this.router.navigate(['/list']);
    });
  }


  ngOnInit() {
  }

}
