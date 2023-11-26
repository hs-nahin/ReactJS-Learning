// eslint-disable-next-line no-unused-vars
import React from 'react';

const Device = (props) => {
    // eslint-disable-next-line react/prop-types
    const { brand, product, price } = props.device;

    


    return (
        <div>
            <h3>Device</h3>
            <p>Brand Name: {brand}</p>
            <p>Product: {product}</p>
            <p>Price: {price}</p>
            <p>Address: {}</p>
            <hr />
        </div>
    );
};

export default Device;
