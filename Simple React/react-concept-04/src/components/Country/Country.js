import React from 'react';
import LoadCountries from './LoadCountries';

const Country = (props) => {
    return (
    <div>
      <h4>Official Name : {props.fullName}</h4>
      <p>Name : {props.name}</p>
      <p>Location : {props.location}</p>
    </div>
    );
};

export default Country;