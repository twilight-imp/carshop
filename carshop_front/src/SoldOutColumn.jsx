import CarCard from './CarCard';

function SoldOutColumn({ cars }) {
  const soldCars = cars.filter(car => car.status === 'SOLD_OUT');

  return (
    <div className="column">
      <h4>Продано</h4>
      {soldCars.map(car => (
       <CarCard car={car} />
      ))}
    </div>
  );
}

export default SoldOutColumn;
