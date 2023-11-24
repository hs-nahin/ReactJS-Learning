import React, { useEffect, useState } from 'react';
import Country from './Country';
import './LoadCountry.css'
const LoadCountries = () => {
    const [countries, setCountries] = useState([])
    useEffect( () =>{
      fetch ("https://restcountries.com/v3.1/all")
      .then (res => res.json())
      .then (data => setCountries(data))
    } , [])
  
    return(
      <div>
        <h1>All the Countries</h1>
          <div className='loadCountry-container'>
          <p>Total Countries Available : {countries.length}</p>
          {
            countries.map(country => <Country name = {country.name.common} key = {country.cca3} fullName = {country.name.official} flag = {country.flags.png} region = {country.continents}></Country>)
          }
          </div>
      </div>
    )
};

export default LoadCountries;