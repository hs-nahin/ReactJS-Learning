// App.jsx
import React from 'react'; // Import the React module from 'react'

import './App.css'; // Import the styles from the 'App.css' file
import Header from './components/Header/Header'; // Import the Header component from the specified path
import Shop from './components/Shop/Shop'; // Import the Shop component from the specified path

function App() { // Define the functional component named App

  return (
    <>
      <Header></Header> {/* Render the Header component */}
      <Shop></Shop> {/* Render the Shop component */}
    </>
  )
}

export default App // Export the App component as the default export
