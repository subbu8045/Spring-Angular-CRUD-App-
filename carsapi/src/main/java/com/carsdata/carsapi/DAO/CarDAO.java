package com.carsdata.carsapi.DAO;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.carsdata.carsapi.model.Car;
import com.carsdata.carsapi.repository.CarRepository;

@Service
public class CarDAO {

	@Autowired 
	CarRepository carRepository;
	
	/* to save a car */
	
	public Car save (Car car) {
		return carRepository.save(car);
	}
	
	/* search all Cars*/
	
	public List<Car> findAll(){
		return carRepository.findAll();
	}
	/*get a Car by id*/
	
	public Car findOne(Long carid) {
		return carRepository.findOne(carid);
	}
	
	/*delete a Car*/
	public void delete(Car car) {
		carRepository.delete(car);
	}
}
