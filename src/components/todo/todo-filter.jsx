import classNames from "classnames";
import React, { useState } from 'react';
import TasksFilterImage from '../../assets/TasksList.svg';
import CarSearch from "./todo-search";

const TodoFilter = ({ setFilter, activeFilter, carModels, carYears  }) => {

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

  const handleBrandChange = (event) => {
    setFilter({ ...activeFilter, brand: event.target.value });
  };

  const initialYears = activeFilter.years || [];
  const [years, setYears] = useState(initialYears); // Используем установленное значение

  const handleYearChange = (event, year) => {
    const isChecked = event.target.checked; // Проверяем, был ли чекбокс отмечен
    const newYears = isChecked
      ? [...years, year] // Если отмечен, добавляем год в список фильтрации
      : years.filter(y => y !== year); // Если не отмечен, удаляем год из списка фильтрации
    setYears(newYears); // Обновляем состояние списка годов
    setFilter({ ...activeFilter, years: newYears }); // Применяем обновленный список годов к фильтру
  };

  return (
    <div className="Tasks-Filter">
      <img className="TasksFilterImage" src={TasksFilterImage} alt="" />
      <div className="Tasks-FilterBtn">
      <select
          value={activeFilter.brand}
          onChange={handleBrandChange}
        >
          {carModels.map((carModel) => (
            <option key={carModel} value={carModel}>{carModel}</option>
          ))}
        </select>
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

    <div className="FilterByYear">
        {carYears.map(year => (
          <div key={year} className="LeftSideItemCheckBox">
            <input
      type="checkbox"
      value={year}
      checked={years.includes(year)}
      onChange={(event) => handleYearChange(event, year)}
            />
            <p>{year}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default TodoFilter;
