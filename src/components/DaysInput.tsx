import React from 'react';

interface DaysInputProps {
    days: number;
    setDays: React.Dispatch<React.SetStateAction<number>>;
}

const DaysInput: React.FC<DaysInputProps> = ({ days, setDays }) => (
    <div>
        <input
            type="number"
            value={days}
            onChange={(e) => setDays(Number(e.target.value))}
            placeholder="Number of days"
            min="1"
        />
    </div>
);

export default DaysInput;