import React from 'react';
import WeatherCard from './WeatherCard';

interface ForecastTableProps {
    forecast: Array<{
        date: string;
        temperature: number;
        description: string;
    }>;
}

const ForecastTable: React.FC<ForecastTableProps> = ({ forecast }) => (
    <div className="forecast-table">
        {forecast.map((weather, index) => (
            <WeatherCard key={index} weather={weather} />
        ))}
    </div>
);

export default ForecastTable;