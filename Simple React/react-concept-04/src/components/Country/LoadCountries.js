import React, { useEffect, useState } from 'react';
import Country from './Country';

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
        <p>Total Countries Available : {countries.length}</p>
        {
          countries.map(country => <Country name = {country.name.common} fullName = {country.name.official} location = {country.continents}></Country>)
        }
      </div>
    )
};

export default LoadCountries;