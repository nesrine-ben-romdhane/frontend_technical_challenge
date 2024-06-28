import React from 'react';

interface UnitDropdownProps {
    unit: string;
    setUnit: React.Dispatch<React.SetStateAction<string>>;
}

const UnitDropdown: React.FC<UnitDropdownProps> = ({ unit, setUnit }) => (
    <div>
        <select value={unit} onChange={(e) => setUnit(e.target.value)}>
            <option value="C">Celsius</option>
            <option value="F">Fahrenheit</option>
        </select>
    </div>
);

export default UnitDropdown;