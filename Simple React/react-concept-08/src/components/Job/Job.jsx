import React from 'react';

const Job = (props) => {
    return (
        <div>
            <h1>Company Name : {props.company}</h1>
            <h3>Designation : {props.position}</h3>
            <p>Salary : {props.salary}</p>
        </div>
    );
};

export default Job;