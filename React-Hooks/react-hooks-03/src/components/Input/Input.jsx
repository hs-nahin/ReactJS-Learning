import { useEffect, useRef, useState } from 'react';

const Input = () => {
    const [input, setInput] = useState('');
    const [submit, setSubmit] = useState('');
    const renderCount = useRef(0);

    useEffect(() => {
        renderCount.current = renderCount.current + 1;
        console.log('useEffect called, renderCount:', renderCount.current);
    }, [input]);

    const handleInput = (event) => {
        const value = event.target.value;
        setInput(value);
    };

    const handleSubmit = () => {
        setSubmit(input);
    };

    console.log('Component rendered, renderCount:', renderCount.current);

    return (
        <div>
            <input type="text" onChange={handleInput} value={input} />
            <button onClick={handleSubmit} type="submit">Submit</button>
            <h1>{submit}</h1>
            <h1>Render Count: {renderCount.current}</h1>
        </div>
    );
}

export default Input;
