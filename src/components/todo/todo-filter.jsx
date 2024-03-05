import classNames from "classnames";
import React from "react";
import TasksFilterImage from '../../assets/TasksList.svg';
const TodoFilter = ({ setFilter, filterMap, activeFilter }) => {
  const filterKeys = Object.keys(filterMap);

  return (
    <div className="Tasks-Filter">
      <img className="TasksFilterImage" src={TasksFilterImage} alt="" />
      <div className="Tasks-FilterBtn">
      {filterKeys.map((filterName) => (
        <button
          key={filterName}
          onClick={() => setFilter(filterName)}
          className={classNames({ active: filterName === activeFilter })}
        >
          {filterName}
        </button>
      ))}
      </div>
    </div>
  );
};

export default TodoFilter;
