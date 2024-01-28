import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="Logo" />
            <div className="">
                <a href="/">Shop</a>
                <a href="/orders">Orders</a>
                <a href="/order-review">Order Review</a>
                <a href="/manage-inventory">Manage Inventory</a>
                <a href="/log-in">Login</a>
            </div>
        </nav>
    );
};

export default Header;
