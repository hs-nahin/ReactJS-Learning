import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const addValue = () => {
        setCount( (prevCount) => prevCount + 1);
        setCount( (prevCount) => prevCount + 1);
        setCount( (prevCount) => prevCount + 1);
        setCount( (prevCount) => prevCount + 1);
        setCount( (prevCount) => prevCount + 1);
    }
    const decreaseValue = () => {
        if (count > 0){
            setCount (count -1);
        }
    }
    return (
        <div>
            <h1>Value : {count}</h1>
            <button onClick={decreaseValue}>Decrease Value</button>
            <button onClick={addValue}>Increase Value</button>
        </div>
    );
};

export default Counter;