import React, { useEffect, useState } from 'react';
import Logo from '/Logo.png';
import SearchBar from '../components/searchbar/SearchBar';
import WeatherCard from '../components/cards/WeatherCard';
import PreviewCard from '../components/cards/PreviewCard';
import { fetchWeatherData } from '../services/weatherService';

const Home = () => {
  const [allCitiesWeather, setAllCitiesWeather] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    const loadWeather = async () => {
      try {
        const data = await fetchWeatherData();
        setAllCitiesWeather(data);
        setFilteredCities(data);
      } catch (err) {
        console.error('Error loading weather data:', err);
      }
    };
    loadWeather();
  }, []);

  const handleAddCity = (cityName) => {
    const found = allCitiesWeather.filter(
      (city) => city.name.toLowerCase() === cityName.toLowerCase()
    );
    if (found.length > 0) {
      setFilteredCities(found);
    } else {
      alert('City not found or not available in dataset.');
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-no-repeat bg-contain bg-top min-h-screen bg-[url(/assets/img/Headerbg.png)]">
      <header className="flex flex-col items-center gap-5 pt-16 px-4 text-center">
        <img src={Logo} alt="Weather App Logo" className="w-16 sm:w-20" />
        <h1 className="text-2xl sm:text-3xl text-white font-bold drop-shadow-lg">
          Weather App
        </h1>
      </header>

      {!selectedCity && (
        <div className="flex justify-center items-center mt-10 px-4">
          <SearchBar onAdd={handleAddCity} />
        </div>
      )}

      {!selectedCity && (
        <div
          className={`${
            filteredCities.length === 1
              ? 'flex justify-center'
              : 'grid grid-cols-1 sm:grid-cols-2 gap-6'
          } px-4 mt-10 max-w-5xl mx-auto`}
        >
          {filteredCities.map((city, index) => (
            <WeatherCard
              key={city.id}
              data={city}
              index={index}
              onClose={() => setFilteredCities(allCitiesWeather)}
              onClick={() => setSelectedCity(city)}
            />
          ))}
        </div>
      )}

      {filteredCities.length === 0 && (
        <main className="flex flex-col items-center mt-10 px-4">
          <p className="text-white text-lg text-center">No city found. Try another.</p>
        </main>
      )}

      {selectedCity && (
        <div className="flex justify-center mt-10 px-4">
          <PreviewCard
            data={selectedCity}
            index={0}
            onClose={() => setSelectedCity(null)}
          />
        </div>
      )}

      <footer>
        <p className="bg-black text-center text-white font-medium mt-10 p-5 text-sm sm:text-base">
          &copy; {currentYear} Fidenz Technologies
        </p>
      </footer>
    </div>
  );
};

export default Home;
