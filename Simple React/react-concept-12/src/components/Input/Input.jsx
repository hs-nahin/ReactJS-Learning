import 'react';
import { useState } from 'react';

const Input = () => {
    const [input, setInput] = useState('');
    const [submit, setSubmit] = useState('');

    const handleInput = (event) => {
        const value = event.target.value;
        setInput(value);
    }

    const handleSubmit = () => {
        setSubmit(input);
    }

    return (
      <div>
        <input type="text" onChange={handleInput} value={input} />
        <button onClick={handleSubmit} type="submit">Submit</button>
        <h1>{submit}</h1>
      </div>
    );
}

export default Input;