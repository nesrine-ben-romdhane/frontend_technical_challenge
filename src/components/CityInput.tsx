import React from 'react';

interface CityInputProps {
    city: string;
    setCity: React.Dispatch<React.SetStateAction<string>>;
}

const CityInput: React.FC<CityInputProps> = ({ city, setCity }) => (
    <div>
        <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
        />
    </div>
);

export default CityInput;