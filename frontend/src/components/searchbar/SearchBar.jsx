import React, { useState } from 'react';

const SearchBar = ({ onAdd }) => {
  const [city, setCity] = useState('');

  const handleAddCity = () => {
    if (city.trim()) {
      onAdd(city.trim());
      setCity('');
    }
  };

  return (
    <div className="flex w-full bg-background max-w-md mx-auto rounded-md shadow-lg">
      <input
        type="text"
        placeholder="Enter a city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="flex-1 text-white placeholder-gray-400 px-4 py-2 rounded-l-md outline-none"
      />
      <button
        onClick={handleAddCity}
        className="bg-purple hover:bg-purple/95 cursor-pointer text-white font-semibold px-4 py-2 rounded-md"
      >
        Add City
      </button>
    </div>
  );
};

export default SearchBar;
