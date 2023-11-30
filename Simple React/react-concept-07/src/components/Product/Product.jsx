import { } from 'react';
import './Product.css';
const Product = (props) => {
    // eslint-disable-next-line react/prop-types
    const { img, name, seller, quantity, price, ratings } = props.product;
    const handleAddToCart = props.AddToCart;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="card">
                <h5 className='product-name'>{name}</h5>
                <h6 className='product-price'>Price : ${price}</h6>
                <p className='made-by'>Manufacturer : {seller}</p>
                <p className='rating'>Rating : {ratings}</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;