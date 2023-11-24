import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import LoadCountries from './components/Country/LoadCountries';

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}

export default App;
