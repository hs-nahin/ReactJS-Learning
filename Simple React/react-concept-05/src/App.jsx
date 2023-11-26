import { } from 'react'
import Cosmetics from './components/Cosmetics/Cosmetics';
import Shoes from './components/Shoes/Shoes';
import { total } from './utilities/calculate';

// import './App.css'


function App() {
const n = 2000;
const m = 2004;
const final = total(n, m);
  return (
    <>
    <div>
      <Cosmetics></Cosmetics>
      <Shoes></Shoes>
      <h1>This is the App Component</h1>
      <p>Final : {final}</p>
    </div>
    </>
  )
}

export default App
