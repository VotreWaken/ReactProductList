import classNames from "classnames";
import React, { useState } from 'react';
import TasksFilterImage from '../../assets/TasksList.svg';

const TodoFilter = ({ setFilter, activeFilter, carModels }) => {

  const [searchTerm, setSearchTerm] = useState(""); // Состояние для хранения строки поиска

  const handlePriceChange = (event) => {
    const newPriceRange = { ...activeFilter.priceRange, min: parseInt(event.target.value) };
    setFilter({ ...activeFilter, priceRange: newPriceRange });
  };

  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    setFilter({ ...activeFilter, searchTerm: term }); // Установка строки поиска в фильтр
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
      <span>$0 - ${activeFilter.priceRange.min.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
        <input
          type="range"
          name="min"
          min="0"
          max="3000000"
          value={activeFilter.priceRange.min}
          onChange={handlePriceChange}
        />
    </div>
    <div className="SearchInput">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
    </div>
  );
};

export default TodoFilter;
