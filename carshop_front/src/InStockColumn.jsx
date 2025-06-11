import CarCard from './CarCard';

function InStockColumn({ cars, changeStatus }) {
  const inStockCars = cars.filter(car => car.status === 'IN_STOCK');

  return (
    <div className="column">
      <h4>В наличии</h4>
      {inStockCars.map(car => (
        <CarCard key={car.id} car={car}>
        <button 
          className="primary outline"
          onClick={() => changeStatus(car.id, 'SOLD_OUT')}
        >
          Продано
        </button>
      </CarCard>
      ))}
    </div>
  );
}

export default InStockColumn;
