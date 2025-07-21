import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { getFromCache, setToCache } from '../utils/cache.js';
import dotenv from 'dotenv';

dotenv.config();

const citiesPath = path.resolve('data', 'cities.json');
const cities = JSON.parse(fs.readFileSync(citiesPath)).List;

const API_KEY = process.env.OPENWEATHER_API_KEY;

export const getWeatherData = async (req, res) => {
  try {
    const results = await Promise.all(
      cities.map(async (city) => {
        const cacheKey = city.CityCode;
        const cached = getFromCache(cacheKey);

        if (cached) return cached;

        try {
          const url = `https://api.openweathermap.org/data/2.5/weather?id=${city.CityCode}&appid=${API_KEY}&units=metric`;
          const response = await axios.get(url);

          // Cache the full response data
          const fullWeatherData = response.data;
          setToCache(cacheKey, fullWeatherData);

          return fullWeatherData;
        } catch (err) {
          return { CityName: city.CityName, error: 'Failed to fetch' };
        }
      })
    );

    res.json({ List: results });
  } catch (err) {
    console.error('Server Error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
