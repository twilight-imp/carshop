import CarCard from './CarCard';

function AwaitingDeliveryColumn({ cars, changeStatus }) {
  const awaitingCars = cars.filter(car => car.status === 'AWAITING_DELIVERY');

  return (
    <div className="column">
      <h4>Ожидает поставки</h4>
      {awaitingCars.map(car => (
        <CarCard key={car.id} car={car}>
        <button 
          className="primary outline"
          onClick={() => changeStatus(car.id, 'IN_STOCK')}
        >
          В наличии
        </button>
      </CarCard>
      ))}
    </div>
  );
}

export default AwaitingDeliveryColumn;
