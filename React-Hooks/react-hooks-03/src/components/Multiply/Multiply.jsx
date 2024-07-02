import 'react';

const Multiply = () => {
    
    const value = () => {
        const input = document.getElementById('input');
        const inputNumber = parseInt(input.value, 10);
        return inputNumber;
    }

    const handleSubmit = (x) => {
        const multiply = x * 2;
        const display = document.getElementById('display');
        display.innerText = `${multiply}`;
    }

    return (
        <div>
            <input type="number" placeholder='Multiply: X * 2' id="input" />
            {' '}
            <button onClick={() => handleSubmit(value())} type="submit">Multiply</button>
            <h1 id='display'></h1>
        </div>
    );
};

export default Multiply;
