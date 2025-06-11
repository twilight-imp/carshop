import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const CarForm = ({ addCar }) => {
  const [newCar, setNewCar] = useState({
    brand: '',
    model: '',
    price: '',
    color: '',
    power: '',
    gearbox: '',
    drive: '',
    status: 'AWAITING_DELIVERY'
  });


  const [errors, setErrors] = useState({});
  const addingCar = () => {
    const newErrors = {};

    if (!newCar.brand.trim()) newErrors.brand = 'Введите марку автомобиля';
    if (!newCar.model.trim()) newErrors.model = 'Введите модель автомобиля';
    if (!newCar.price.trim()) newErrors.price = 'Введите стоимость автомобиля';
    else if (isNaN(newCar.price) || parseFloat(newCar.price) <= 0) newErrors.price = 'Некорректное значение стоимости';
    if (!newCar.color.trim()) newErrors.color = 'Введите цвет автомобиля';
    if (!newCar.power.trim()) newErrors.power = 'Введите мощность автомобиля';
    else if (isNaN(newCar.power) || parseInt(newCar.power) <= 0) newErrors.power = 'Некорректное значение мощности';
    if (!newCar.gearbox.trim()) newErrors.gearbox = 'Выберите тип трансмиссии';
    if (!newCar.drive.trim()) newErrors.drive = 'Выберите тип привода';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const newCarWithId = {
      ...newCar,
      id: uuidv4()
    };

    addCar(newCarWithId);
    setNewCar({ brand: '', model: '', price: '', color: '', power: '', gearbox: '', drive: '', status: 'AWAITING_DELIVERY' });
    setErrors({});
  };

  return (
    <div className="form">
      <h4>Добавить автомобиль</h4>
      <input
        type="text"
        placeholder="Марка"
        value={newCar.brand}
        onChange={e => setNewCar(
          { ...newCar, brand: e.target.value }
        )}
        className={errors.brand ? 'error' : ''}
      />
      {errors.brand && <div className="error-text">{errors.brand}</div>}
      <input
        type="text"
        placeholder="Модель"
        value={newCar.model}
        onChange={e => setNewCar(
          { ...newCar, model: e.target.value }
        )}
        className={errors.model ? 'error' : ''}
      />
      {errors.model && <div className="error-text">{errors.model}</div>}
      <input
        type="text"
        placeholder="Стоимость"
        value={newCar.price}
        onChange={(e) => setNewCar(
          { ...newCar, price: e.target.value }
        )}
        className={errors.price ? 'error' : ''}
      />
      {errors.price && <div className="error-text">{errors.price}</div>}
      <input
        type="text"
        placeholder="Цвет"
        value={newCar.color}
        onChange={(e) => setNewCar(
          { ...newCar, color: e.target.value }
        )}
        className={errors.color ? 'error' : ''}
      />
      {errors.color && <div className="error-text">{errors.color}</div>}
      <input
        type="text"
        placeholder="Мощность"
        value={newCar.power}
        onChange={(e) => setNewCar(
          { ...newCar, power: e.target.value }
        )}
        className={errors.power ? 'error' : ''}
      />
      {errors.power && <div className="error-text">{errors.power}</div>}
      <select
        value={newCar.gearbox}
        onChange={(e) => setNewCar({ ...newCar, gearbox: e.target.value })}
        className={errors.gearbox ? 'error' : ''}
      >
        <option value="">Выберите тип трансмиссии</option>
        <option value="механика">Механика</option>
        <option value="автомат">Автомат</option>
        <option value="вариатор">Вариатор</option>
      </select>
      {errors.gearbox && <div className="error-text">{errors.gearbox}</div>}

      <select
        value={newCar.drive}
        onChange={(e) => setNewCar({ ...newCar, drive: e.target.value })}
        className={errors.drive ? 'error' : ''}
      >
        <option value="">Выберите тип привода</option>
        <option value="передний">Передний</option>
        <option value="задний">Задний</option>
        <option value="полный">Полный</option>
      </select>
            {errors.drive && <div className="error-text">{errors.drive}</div>}
      <button onClick={addingCar}>Добавить</button>
    </div>
  );
};

export default CarForm;
