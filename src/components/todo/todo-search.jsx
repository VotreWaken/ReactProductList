import React, { useState } from 'react';

// CarSearch.js

const CarSearch = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");
  
    const handleSearchChange = (event) => {
      const term = event.target.value;
      setSearchTerm(term);
      onSearch(term); // Вызываем функцию поиска и передаем текущее значение строки поиска
    };
  
    return (
      <div className="SearchInput">
        <input
          type="text"
          placeholder="Search by car name"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
    );
  };
  
  export default CarSearch;
  