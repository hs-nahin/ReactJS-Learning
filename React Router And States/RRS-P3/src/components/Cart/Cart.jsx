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
            <h1 className='product-list'>Product List</h1>
            {cart.length > 0 ? <h4 className={cart.length ===1 ? 'tomato' : 'blue'}>Total Product: {cart.length}</h4> : <span>The Cart is empty</span>}
            {message}
            {
                cart.map(tshirt => <p 
                    key={tshirt._id}>
                        {tshirt.name}
                        <button onClick={() => handleRemoveFromCart(tshirt._id)}>⛌</button>
                        </p>)
            }
            {
                cart.length === 4 && <p>You got a free delivery service for more than four product</p>
            }{
                cart.length === 3 || <p>It is less than 3</p>
            }
            <p className={`text-color ${cart.length === 3 ? 'tomato' : 'blue'}`}>Conditional CSS Test</p>
        </div>
    );
};


/*
* Conditional Rendering
* 1. Use if or if-else to set a variable that will contain an element, components.
* 2. Ternary : Condition ? "if true" : "false".
* 3. Logical &&: (if the condition is true then the next thing will be displayed). 
* 4. Logical || (if the condition is false then the next thing will be displayed). 
* 5. Conditional CSS Class
*/

/*
* Conditional CSS Class
* 1. use Ternary
* 2. Ternary inside template String
*/
export default Cart;