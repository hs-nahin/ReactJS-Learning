import React from 'react';

const List = (props) => {
    return (
        <div>
            <h1>Brand Name : {props.brand}</h1>
            <p>Price : {props.price}</p>
        </div>
    );
};

export default List;