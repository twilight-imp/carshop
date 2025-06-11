package demo.service.impl;

import demo.model.Car;
import demo.repo.CarRepository;
import demo.service.CarService;

import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CarServiceImpl implements CarService {

    private CarRepository carRepository;

    @Autowired
    public void setCarRepository(CarRepository carRepository) {this.carRepository = carRepository;}

    @Override
    public List<Car> getCars() {return carRepository.findAll();}

}
