import React from 'react';
import './Cart.css';


const Cart = ({cart, handleRemoveFromCart}) => {
    let message;
    if (cart.length === 0){
        message = <p>Please add product</p>
    }
    return (
        <div>
            <h1>Order Item List: {cart.length}</h1>
            {message}
            {
                cart.map(tshirt => <p 
                    key={tshirt._id}>
                        {tshirt.name}
                        <button onClick={() => handleRemoveFromCart(tshirt._id)}>⛌</button>
                        </p>)
            }
        </div>
    );
};


/*
* Conditional Rendering
*/
export default Cart;