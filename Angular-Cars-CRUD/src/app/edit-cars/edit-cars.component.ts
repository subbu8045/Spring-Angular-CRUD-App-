import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from "rxjs/operators";
import { MatSnackBar } from '@angular/material';
import { CarsService } from '../cars.service';
import { Cars } from '../cars.model';

@Component({
  selector: 'app-edit-cars',
  templateUrl: './edit-cars.component.html',
  styleUrls: ['./edit-cars.component.css']
})
export class EditCarsComponent implements OnInit {

  id: string;
  car: Cars;
  updateForm: FormGroup;

  constructor(private carService: CarsService, private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar, private fb: FormBuilder) {
   this.createForm();
   }
  createForm() {
    this.updateForm = this.fb.group({
      make: ['', Validators.required],
      model: '',
      year: '',
      transmission: '',
      type: ''
    });
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      
      this.carService.getCarById(this.id).subscribe(res => {
        console.log(res);
        this.car = res;
        this.updateForm.get('make').setValue(this.car.make);
        this.updateForm.get('model').setValue(this.car.model);
        this.updateForm.get('year').setValue(this.car.year);
        this.updateForm.get('transmission').setValue(this.car.transmission);
        this.updateForm.get('type').setValue(this.car.type);
      });
    });
  }
  updateCar(make, model, year, transmission, type) {
    console.log(this.id)
    this.carService.updateCar(this.id, make, model, year, transmission, type).subscribe(() => {
      this.snackBar.open('Issue updated successfully', 'OK', {
        duration: 3000
      });
    });
  }
}
