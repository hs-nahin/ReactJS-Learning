// eslint-disable-next-line no-unused-vars
import React from 'react';

const Device = (props) => {
    // eslint-disable-next-line react/prop-types
    const { brand, product, price } = props.device;
    const addToCart = (price) => {
        console.log ("Price of the product is : ", price);
    }
    const addToCartWithParameter = () => addToCart (price);
    return (
        <div>
            <h3>Device</h3>
            <p>Brand Name: {brand}</p>
            <p>Product: {product}</p>
            <p>Price: {price}</p>
            <p>Address: {}</p>
            <button onClick={addToCartWithParameter}>Add to Cart</button>
            <hr />
        </div>
    );
};

export default Device;
