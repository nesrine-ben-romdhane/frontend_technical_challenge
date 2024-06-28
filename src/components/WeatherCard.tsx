import React from 'react';

interface WeatherCardProps {
    weather: {
        date: string;
        temperature: number;
        description: string;
    };
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weather }) => (
    <div className="weather-card">
        <p>Date: {weather.date}</p>
        <p>Temperature: {weather.temperature}°</p>
        <p>Description: {weather.description}</p>
    </div>
);

export default WeatherCard;