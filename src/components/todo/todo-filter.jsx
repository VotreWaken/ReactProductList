import classNames from "classnames";
import React, { useState } from 'react';
import TasksFilterImage from '../../assets/TasksList.svg';

const TodoFilter = ({ setFilter, activeFilter, carModels }) => {

  const [minPrice, setMinPrice] = useState(0);

  const handlePriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  return (
    <div className="Tasks-Filter">
      <img className="TasksFilterImage" src={TasksFilterImage} alt="" />
      <div className="Tasks-FilterBtn">
        {carModels.map((carModel) => (
          <button
            key={carModel}
            onClick={() => setFilter(carModel)}
            className={classNames({ active: carModel === activeFilter })}
          >
            {carModel}
          </button>
        ))}
      </div>
      <div className="FilterByPrice">
      <span>$0 - ${minPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
      <input
        type="range"
        name="min"
        min="0"
        max="3000000"
        value={minPrice}
        onChange={handlePriceChange}
      />
    </div>

    </div>
  );
};

export default TodoFilter;
