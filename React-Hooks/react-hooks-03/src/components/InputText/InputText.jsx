import 'react';

const InputText = () => {
    const handleSubmit = () => {
        const inputItem = document.getElementById("input_text");
        const inputText = inputItem.value;

        const displayText = document.getElementById('display_text');
        displayText.innerText = `${inputText}`

    }
    return (
        <div>
            <br />
            <input type="text" placeholder='Input Text and Submit' id="input_text" />
            <button onClick={handleSubmit} type="submit">Submit</button>
            <h1 id='display_text'></h1>
        </div>
    );
};

export default InputText;