export const fetchWeatherData = async () => {
  const response = await fetch('http://localhost:3001/api/weather');
  if (!response.ok) throw new Error('Failed to fetch weather data');
  const data = await response.json();
  return data.List;
};
