import React, { useState } from 'react';
import '../App.css';

const SearchBar = ({onSearch}) => {
    const [city ,setCity]=useState('')
    
    const handleSearch = async () => {
        if (city.trim() === '') return;
    
        try{
            const response = await fetch(`http://localhost:5000/api/search/${encodeURIComponent(city)}`);
            if (!response.ok) {
                throw new Error('Failed to fetch destinations');
            }
            const data = await response.json();
            onSearch(data);
            console.log(data)
        } catch (error) {
            console.error('Error fetching destinations:', error);
        }
        
      };

      const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          handleSearch();
        }
      };
    
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search countries, cities" className="search-input" value={city}
          onChange={(e) => setCity(e.target.value) } onKeyDown={handleKeyDown}/>
    </div>
  );
};

export default SearchBar;
