import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCarComponent } from './create-car/create-car.component';
import { EditCarsComponent } from './edit-cars/edit-cars.component';
import { CarsListComponent } from './cars-list/cars-list.component';

const routes: Routes = [
  { path: 'create', component: CreateCarComponent },
  { path: 'edit/:id', component: EditCarsComponent },
  { path: 'list', component: CarsListComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
