import 'react';
import { useEffect, useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(count);
    }, [count])
    
    const increment = () => {
        if(count < 10) {

            let IncCounter = count + 1;
            setCount(IncCounter);
        }
    }
    const decrement = () => {
        if(count > 0){

            let DecCounter = count - 1;
            setCount(DecCounter);
        }
    }
    return (
        <div>
            <button onClick={increment} type="submit">Increment</button>
            <button onClick={decrement} type="submit">Decrement</button>
            <h1>{count}</h1>
        </div>
    );
};

export default Counter;