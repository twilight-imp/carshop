import React, { useState, useEffect } from 'react';
import CarForm from './CarForm';
import AwaitingDeliveryColumn from './AwaitingDeliveryColumn';
import InStockColumn from './InStockColumn';
import SoldOutColumn from './SoldOutColumn';
import './App.css'; 


function App() {
  const [cars, setCars] = useState([]); 
  useEffect(() => {
    fetch('http://localhost:8080/cars') 
      .then(response => {
        if (!response.ok) throw new Error(`Не удалось получить данные: ${response.status}`);
        return response.json();
      })
      .then(cars => {
        setCars(cars);
      })
      .catch(error => {
        console.error('Ошибка при выборке или парсинге данных:', error);
        setCars([]);
      });
  }, []);

  const changeStatus = (id, newStatus) => {
  setCars(cars.map(car => car.id === id ? { ...car, status: newStatus } : car));
};
  
  const addCar = (newCar) => {
    setCars((oldCars) => {
      const updatedCars = [...oldCars, newCar];
      return updatedCars;
    });
  };
  

  return (
  <div>
    <div>
      <h1>Автосалон</h1>
    </div>
    <div className="board">
      <div className="column">
        <CarForm addCar={addCar} />
      </div>
      <AwaitingDeliveryColumn cars={cars} changeStatus={changeStatus} />
      <InStockColumn cars={cars} changeStatus={changeStatus} />
      <SoldOutColumn cars={cars} />
    </div>
  </div>
);
}

export default App;