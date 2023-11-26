// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import Device from './Device/Device';

const Devices = () => {
    const devices = [
        { id: 1, product: "Laptop", brand: "ASUS", price: 65000 },
        { id: 2, product: "Phone", brand: "Realme", price: 15000 },
        { id: 3, product: "Watch", brand: "Xiaomi", price: 2000 },
        { id: 4, product: "Mouse", brand: "Logitech", price: 1500 },
        { id: 5, product: "Keyboard", brand: "Logitech", price: 1000 },
    ];

    return (
        <>
            <div>
                <h1>Welcome to my Device Shop</h1>
            </div>
            {devices.map(device => <Device key={device.id} device={device} />)};
        </>
    );
};

export default Devices;
