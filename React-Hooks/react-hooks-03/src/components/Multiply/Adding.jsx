import 'react';
import { useState } from 'react';

const Adding = () => {
    const [inputNumber, setInputNumber] = useState(0);
    const [result, setResult] = useState(null);

    const handleChange = (event) => {
        const value = parseInt(event.target.value);
        setInputNumber(isNaN(value) ? 0 : value);
    }
    const handleSubmit = () => {
        const add = inputNumber + 2;
        setResult(add);
    }
    return (
        <div>
            <input type="number" placeholder='Adding: X + 2' onChange={handleChange} />
            {' '}
            <button onClick={handleSubmit} type="submit">Add</button>
            <h1 id='display'>{result !== null ? result : ''}</h1>
        </div>
    );
};

export default Adding;