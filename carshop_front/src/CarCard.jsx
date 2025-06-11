function CarCard({ car, children }) {
  const formattedPrice = Number(car.price).toLocaleString('ru-RU');
  const ruStatus = car.status === 'AWAITING_DELIVERY' ? 'ожидает поставки' : car.status === 'IN_STOCK' ? 'в наличии' : 'продано';
  return (
    <div className="card">
      <h4>{car.brand} {car.model}</h4>
      <p>Стоимость: {formattedPrice} ₽</p>
      <p>Цвет: {car.color}</p>
      <p>Мощность: {car.power} л.с.</p>
      <p>Трансмиссия: {car.gearbox}</p>
      <p>Привод: {car.drive}</p>
      <p>Статус: {ruStatus}</p>
      {children}
    </div>
  );
}

export default CarCard;