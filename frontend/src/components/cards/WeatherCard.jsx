import React from 'react';
import { IoClose } from "react-icons/io5";

import fewclouds from '/assets/icons/few-clouds.png';
import brokencloudes from '/assets/icons/broken-clouds.png';
import mist from '/assets/icons/mist.png';
import clearsky from '/assets/icons/clear-sky.png';
import lightran from '/assets/icons/light-rain.png';
import compass from '/assets/icons/compass.png';

const WeatherCard = ({ data, index, onClose, onClick  }) => {
  if (!data || !data.weather || data.weather.length === 0) return null;

  const {
    name,
    sys,
    weather,
    main,
    visibility,
    wind,
  } = data;

  const weatherMain = weather?.[0]?.main?.toLowerCase?.() || 'clear';

  const weatherIcons = {
    clear: clearsky,
    clouds: fewclouds,
    mist: mist,
    rain: lightran,
    drizzle: lightran,
    thunderstorm: brokencloudes,
  };

  const bgClasses = [
    'bg-blue',
    'bg-purple',
    'bg-green',
    'bg-orange',
    'bg-red',
  ];

  const bgClass = bgClasses[index % bgClasses.length];

  const weatherIcon = weatherIcons[weatherMain] || fewclouds;

  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return `${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`;
  };

  return (
    <div
      onClick={onClick} 
      className="max-w-lg rounded-lg bg-gray overflow-hidden shadow-lg text-white hover:shadow-black cursor-pointer transition-shadow duration-300"
    >
      <div className={`${bgClass} p-8 grid grid-cols-2 gap-5 relative bg-contain bg-no-repeat bg-bottom bg-[url(/assets/img/cloudbg.png)]`}>
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-xl cursor-pointer hover:text-gray-200"
        >
          <IoClose />
        </button>

        <div>
          <h2 className="text-2xl font-semibold text-center">{name}, {sys.country}</h2>
          <p className="text-sm mb-2 text-center">
            {(() => {
              const now = new Date();
              const hours = now.getHours() % 12 || 12;
              const minutes = String(now.getMinutes()).padStart(2, '0');
              const ampm = now.getHours() < 12 ? 'am' : 'pm';
              const month = now.toLocaleString('en-US', { month: 'short' });
              const day = now.getDate();
              return `${hours}.${minutes}${ampm}, ${month} ${day}`;
            })()}
          </p>
          <div className="flex items-center justify-center gap-2 mt-5">
            <img src={weatherIcon} alt={weather[0].main} />
            <span className="font-medium">{weather[0].main}</span>
          </div>
        </div>

        <div className="text-center">
          <div className="text-5xl font-semibold">{Math.round(main.temp)}°C</div>
          <div>
            <p className="text-sm font-medium mt-2">Temp Min: {Math.round(main.temp_min)}°C</p>
            <p className="text-sm font-medium">Temp Max: {Math.round(main.temp_max)}°C</p>
          </div>
        </div>
      </div>

      <div className="p-6 grid grid-cols-3 text-sm gap-4">
        <div className='flex flex-col justify-center gap-2'>
          <p><span className="font-semibold">Pressure:</span> {main.pressure} hPa</p>
          <p><span className="font-semibold">Humidity:</span> {main.humidity}%</p>
          <p><span className="font-semibold">Visibility:</span> {(visibility / 1000).toFixed(1)} km</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 border-gray-400 border-r border-l">
          <img src={compass} alt="compass" />
          <p>{wind.speed} m/s {wind.deg}°</p>
        </div>
        <div className='flex flex-col justify-center gap-2'>
          <p><span className="font-semibold">Sunrise:</span> {formatTime(sys.sunrise)} am</p>
          <p><span className="font-semibold">Sunset:</span> {formatTime(sys.sunset)} pm</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
