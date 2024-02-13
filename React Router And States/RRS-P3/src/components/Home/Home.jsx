import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart.jsx';
import TShirt from '../TShirt/TShirt.jsx';
import './Home.css';

const Home = () => {
    const tShirts = useLoaderData();
    const [cart, setCart] = useState([]);
    const handleAddToCart = tshirt =>{
        const exist = cart.find(ts => ts._id === tshirt._id);
        if (exist){
            toast("This Product is Already in Your Cart")
        } else {
            const newCart = [...cart, tshirt];
            setCart(newCart);
        }

    }

    const handleRemoveFromCart = id => {
       const remaining = cart.filter(ts => ts._id !== id);
        setCart (remaining);
    }
    return (
        <>
        <div className='home-container'>
            <div className='tshirt-container'>
            {
                tShirts.map ( tshirt => <TShirt
                    key={tshirt._id}
                    tshirt={tshirt}
                    handleAddToCart={handleAddToCart}
                />)
            }
            </div>
            <div>
                <Cart 
                cart={cart}
                handleRemoveFromCart={handleRemoveFromCart}
                />
            </div>
        </div>
        </>
    );
};

export default Home;