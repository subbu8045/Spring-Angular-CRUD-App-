import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, throwError, of } from 'rxjs';
import { Cars } from './cars.model';
@Injectable({
  providedIn: 'root'
})
export class CarsService {
  baseUrl = 'http://localhost:8080/data/cars/';
  constructor(private httpClient: HttpClient) { }

  public getCars(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl, { responseType: 'json' });
  }

  public getCarById(id): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + id )
  }
  addCar(make, model, year, transmission, type): Observable<any> {
    const car = {
      make: make,
      model: model,
      year: year,
      transmission: transmission,
      type: type
    };
    return this.httpClient.post(this.baseUrl , car);
  }

  updateCar(id, make, model, year, transmission, type): Observable<any> {
    const car = {
      make: make,
      model: model,
      year: year,
      transmission: transmission,
      type: type
    };
    return this.httpClient.patch(this.baseUrl + id, car);
  }

  deleteCarById(id): Observable<any> {
    return this.httpClient.delete<any>(this.baseUrl + id);
  }
}
