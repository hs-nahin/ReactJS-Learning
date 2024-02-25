import { useState } from "react";
import Counter from "./counter/Counter";


function App() {
  const [counter, setCounter] = useState(0);
  const addValue = () => {
    setCounter(counter + 1);
  }
  const removeValue = () => {
    if (counter > 0){
      setCounter(counter-1);
    }
    return counter;
  }
  return (
    <>
    <div>
      <h1>Counter Value : {counter}</h1>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Minus Value</button>
    </div>
    <div>
      <h1>Reverse Counter</h1>
      <Counter/>
    </div>
    </>
  )
}

export default App
