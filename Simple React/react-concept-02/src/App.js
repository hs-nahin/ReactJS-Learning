import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  const increaseCount = () => setCount(count + 1);

  const decreaseCount = () => {
    const deCount = count > 0 ? count - 1 : 0;
    setCount(deCount);
  };

  // Corrected: added the return statement
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={decreaseCount}>Decrease</button>
      <button onClick={increaseCount}>Increase</button>
    </div>
  );
}

export default App;
