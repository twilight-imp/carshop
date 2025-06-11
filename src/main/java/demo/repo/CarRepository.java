package demo.repo;

import demo.model.Car;
import org.springframework.stereotype.Repository;

@Repository
public class CarRepository extends BaseRepository<Car> {

    protected CarRepository() {
        super(Car.class);
    }
}