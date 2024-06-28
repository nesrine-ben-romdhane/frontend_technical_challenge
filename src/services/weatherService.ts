import axios from 'axios';

const WEATHER_API_URL = 'https://api.open-meteo.com/v1/forecast';
const GEOCODE_API_URL = 'https://geocode.maps.co/search';
const API_KEY = import.meta.env.VITE_API_KEY;

export const getCoordinates = async (city: string) => {
    try {
        const response = await axios.get(`${GEOCODE_API_URL}?q=${city}&api_key=${API_KEY}`);
        return response.data[0];
    } catch (error) {
        throw new Error('Failed to fetch coordinates');
    }
};

export const getWeatherData = async (lat: number, lon: number, days: number, unit: string) => {
    try {
        const response = await axios.get(WEATHER_API_URL, {
            params: {
                latitude: lat,
                longitude: lon,
                daily: 'temperature_2m_max,temperature_2m_min',
                temperature_unit: unit === 'C' ? 'celsius' : 'fahrenheit',
                forecast_days: days
            }
        });
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch weather data');
    }
};