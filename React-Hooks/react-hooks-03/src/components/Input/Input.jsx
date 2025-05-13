import { useState } from 'react';

const Input = () => {
    const [input, setInput] = useState('');
    const [submit, setSubmit] = useState('');
    const [warningMessage, setWarningMessage] = useState(null);




    const handleInput = (event) => {
        const value = event.target.value;
        setInput(value);
        if (value.includes('nahin')) {
            setWarningMessage('You cannot enter this name');
        } else {
            setWarningMessage(null);
        }
    };

    const handleSubmit = () => {
        setSubmit(input);
    };


    return (
        <div>
            <input type="text" onChange={handleInput} value={input} />
            <button onClick={handleSubmit} type="submit">Submit</button>
            {/* {warningMessage && <p style={{ color: 'red' }}>{warningMessage}</p>} */}
            {/* {warningMessage !== null ? (
                <p style={{ color: 'red' }}>{warningMessage}</p>
            ) : null} */}
            <p style={warningMessage ? { color: 'red' } : {}}>{warningMessage || 'Good Choice'}</p>
            <h1>{submit}</h1>
        </div>
    );
}

export default Input;
