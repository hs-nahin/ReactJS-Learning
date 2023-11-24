import React from 'react';
import LoadCountries from './LoadCountries';
import './Country.css'
const Country = (props) => {
    return (
        <div className="country-container">
            <h4>Official Name : {props.fullName}</h4>
            <p>Name : {props.name}</p>
            <p>Region : {props.region}</p>
            <img src={props.flag} alt="" />
        </div>
    );
};

export default Country;