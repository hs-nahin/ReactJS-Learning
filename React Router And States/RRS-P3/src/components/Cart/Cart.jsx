import React from 'react';
import './Cart.css';


const Cart = ({cart, handleRemoveFromCart}) => {
    let message;
    if (cart.length === 0){
        message = <p>Please add product</p>
    } else {
        message = <div>
            <p>Item Added</p>
        </div>
    }
    return (
        <div>
            <h1>Product List</h1>
            {cart.length > 0 ? <h4>Total Product: {cart.length}</h4> : <span>The Cart is empty</span>}
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
* 1. Use if-else to set a variable that will contain an element, components.
* 2. Ternary : Condition ? "if true" : "false"
*/
export default Cart;