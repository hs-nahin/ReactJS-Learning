// Shop.jsx
import { useEffect, useState } from 'react'; // Import useEffect and useState from 'react'
import { addToDB, getShoppingCart } from '../../utilities/fakedb.js';
import Cart from '../Cart/Cart';
import Product from '../Product/Product'; // Import the Product component from the specified path
import './Shop.css'; // Import the styles from 'Shop.css'

const Shop = () => { // Define the functional component named Shop
    const [products, setProducts] = useState([]); // Declare state variable 'products' and its setter function 'setProducts'
    const [cart, setCart] = useState([]); // Declare state variable 'cart' and its setter function 'setCart'
    useEffect(() => { // Use the useEffect hook to perform side effects in function components
        fetch ('products.json') // Fetch data from 'products.json'
        .then (res => res.json()) // Parse the response as JSON
        .then (data => setProducts(data)) // Set the 'products' state with the fetched data
    },[]); // Empty dependency array to run the effect only once

    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        // Step 1: Get ID
        for (const id in storedCart) {
            // Step 2: Get the Product by using ID
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                // Step 3: Add quantity of the Product
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // Step 4 : Add the addedProduct to the savedCart
                savedCart.push (addedProduct);
            }
            console.log ("added product", addedProduct);
        } 
        // Step 5 : Set the cart
        setCart (savedCart);
    }, [products]);    

    const handleAddToCart = (product) => { // Define a function 'handleAddToCart' that adds a product to the cart
        const newCart = [...cart, product]; // Create a new array with the existing cart items and the new product
        setCart(newCart); // Update the 'cart' state with the new cart array
        addToDB(product.id)
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        AddToCart={handleAddToCart}
                    ></Product>) // Map over the products and render a Product component for each
                }
            </div>
            <div className="cart-container">
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop; // Export the Shop component as the default export