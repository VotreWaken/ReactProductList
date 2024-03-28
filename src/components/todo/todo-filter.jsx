import classNames from "classnames";
import React, { useState } from 'react';
import TasksFilterImage from '../../assets/TasksList.svg';
import CarSearch from "./todo-search";

const TodoFilter = ({ setFilter, activeFilter, carModels }) => {

  const [searchTerm, setSearchTerm] = useState(""); // Состояние для строки поиска

  // Обработчик изменения строки поиска
  const handleCarSearch = (searchTerm) => {
    setSearchTerm(searchTerm); // Устанавливаем текущее значение строки поиска
    setFilter({ ...activeFilter, searchTerm: searchTerm.toLowerCase() }); // Применяем строку поиска к фильтру
  };

  const handlePriceChange = (event) => {
    const newPriceRange = { ...activeFilter.priceRange, min: parseInt(event.target.value) };
    setFilter({ ...activeFilter, priceRange: newPriceRange });
  };

  return (
    <div className="Tasks-Filter">
      <img className="TasksFilterImage" src={TasksFilterImage} alt="" />
      <div className="Tasks-FilterBtn">
        {carModels.map((carModel) => (
          <button
          key={carModel}
          onClick={() => setFilter({ ...activeFilter, brand: carModel })}
          className={classNames({ active: carModel === activeFilter.brand })}
        >
            {carModel}
          </button>
        ))}
      </div>
      <div className="FilterByPrice">
      <span>${activeFilter.priceRange.min.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} - $800000</span>
        <input
          type="range"
          name="min"
          min="0"
          max="800000"
          value={activeFilter.priceRange.min}
          onChange={handlePriceChange}
        />
    </div>
    <CarSearch onSearch={handleCarSearch} /> {/* Передаем обработчик поиска */}
    </div>
  );
};

export default TodoFilter;
