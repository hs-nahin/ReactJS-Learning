import React from 'react';
import useCounter from '../Hooks/useCounter';

const CounterTwo = () => {
    const [counter, increment, decrement] = useCounter(2);
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export default CounterTwo;