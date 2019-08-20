package com.carsdata.carsapi.controller;


import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.carsdata.carsapi.DAO.CarDAO;
import com.carsdata.carsapi.model.Car;


@RestController
@RequestMapping("/data")
@CrossOrigin
public class CarController {
	
	
	@Autowired
	CarDAO carDAO;
	
	/* to save a car*/
	@PostMapping("/cars")
	public Car createCar(@Valid @RequestBody Car car) {
		return carDAO.save(car);
	}
	
	/*get all cars*/
	@GetMapping("/cars")
	public List<Car> getAllCars(){
		return carDAO.findAll();
	}
	
	/*get car by car id*/
	@GetMapping("/cars/{id}")
	public ResponseEntity<Car> getCarById(@PathVariable(value="id") Long carid){
		
		Car car=carDAO.findOne(carid);
		
		if(car==null) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok().body(car);
		
	}
	
	/*update a car by car id*/
	@PatchMapping("/cars/{id}")
	public ResponseEntity<Car> updateCar(@PathVariable(value="id") Long carid,@Valid @RequestBody Car carDetails){
		
		Car car=carDAO.findOne(carid);
		if(car==null) {
			return ResponseEntity.notFound().build();
		}
		
		car.setMake(carDetails.getMake());
		car.setModel(carDetails.getModel());
		car.setYear(carDetails.getYear());
		car.setTransmission(carDetails.getTransmission());
		car.setType(carDetails.getType());
		
		Car updateCars = carDAO.save(car);
		return ResponseEntity.ok().body(updateCars);	
	}
	/*Delete a car*/
	@DeleteMapping("/cars/{id}")
	public ResponseEntity<Car> deleteCar(@PathVariable(value="id") Long carid){
		
		Car car=carDAO.findOne(carid);
		if(car==null) {
			return ResponseEntity.notFound().build();
		}
		carDAO.delete(car);
		
		return ResponseEntity.ok().build();
		
		
	}
	
}
