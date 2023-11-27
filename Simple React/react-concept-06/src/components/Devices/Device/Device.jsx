// eslint-disable-next-line no-unused-vars
import React from 'react';
import { addToDB, removeFromDB } from '../../../utilities/fakeDB';

// Device component receives props containing device information
const Device = (props) => {
    // Destructure the device object to extract brand, product, and price
    // eslint-disable-next-line react/prop-types
    const { brand, product, price } = props.device;

    // Function to add the device to the cart using the addToDB utility function
    const addToCart = (price) => {
        addToDB(price);
    }

    // Function to add the device to the cart with the specific price parameter
    const addToCartWithParameter = () => addToCart(price);

    // Function to remove the device from the cart using the removeFromDB utility function
    const removeFromCart = (price) => {
        removeFromDB(price);
    }

    // JSX structure for rendering the Device component
    return (
        <div>
            <h3>Device</h3>
            <p>Brand Name: {brand}</p>
            <p>Product: {product}</p>
            <p>Price: {price}</p>
            <p>Address: {}</p>
            <button onClick={addToCartWithParameter}>Add to Cart</button>
            <button onClick={() => removeFromCart(price)}>Remove</button>
            <hr />
        </div>
    );
};

// Export the Device component for external use
export default Device;
