import React, { useState, useEffect } from 'react';
import CityInput from './components/CityInput';
import UnitDropdown from './components/UnitDropdown';
import DaysInput from './components/DaysInput';
import ForecastTable from './components/ForecastTable';
import { getCoordinates, getWeatherData } from './services/weatherService';
import './styles/style.css';


const App: React.FC = () => {
    const [city, setCity] = useState('');
    const [unit, setUnit] = useState('C');
    const [days, setDays] = useState(10);
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [cityName, setCityName] = useState('');

    useEffect(() => {
        const fetchWeather = async () => {
            setLoading(true);
            setError('');
            try {
                const coordinates = await getCoordinates(city);
                const weatherData = await getWeatherData(coordinates.lat, coordinates.lon, days, unit);
                const forecastData = weatherData.daily.temperature_2m_max.map((temp: number, index: number) => ({
                    date: weatherData.daily.time[index],
                    temperature: temp,
                    description: "Clear Sky" // Exemple de description
                }));
                setForecast(forecastData);
                setCityName(city);
            } catch (err) {
                setError('Failed to fetch weather data');
            } finally {
                setLoading(false);
            }
        };

        if (city) {
            fetchWeather();
        }
    }, [city, unit, days]);

    return (
        <div className="App">
            <h1>Weather Dashboard</h1>
            <CityInput city={city} setCity={setCity} />
            <UnitDropdown unit={unit} setUnit={setUnit} />
            <DaysInput days={days} setDays={setDays} />
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {!loading && !error && (
                <>
                    <h2>{cityName}</h2>
                    <ForecastTable forecast={forecast} />
                </>
            )}
        </div>
    );
};

export default App;