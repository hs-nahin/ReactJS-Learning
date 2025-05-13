import React from 'react';
import useCounter from '../Hooks/useCounter';

const CounterOne = () => {
    const [counter, increment, decrement] = useCounter(1);
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export default CounterOne;