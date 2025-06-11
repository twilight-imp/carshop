package demo.controller;


import demo.dto.CarDto;
import demo.model.Car;
import demo.service.CarService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/cars")
public class CarController {

    private CarService carService;

    private ModelMapper modelMapper;

    @Autowired
    public void setCarService(CarService carService) {
        this.carService = carService;
    }

    @Autowired
    public void setModelMapper(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping
    public List<CarDto> getAllCars() {
        List<Car> cars = carService.getCars();
        return cars.stream()
                .map(car -> modelMapper.map(car, CarDto.class))
                .toList();
    }
}