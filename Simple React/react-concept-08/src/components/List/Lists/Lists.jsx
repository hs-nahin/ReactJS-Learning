import React from 'react';
import List from '../List';

const Lists = () => {
    const names = ["Nahin", "Rakib", "Mehedi", "Emon", "Shad"];
    const users = [
        {name : "Emon", address : "Dinajpur"},
        {name : "Shad", address : "Dinajpur"},
        {name : "Rakib", address : "Dinajpur"},
        {name : "Mehedi", address : "Birol"},
        {name : "Nahin", address : "Dhaka"},
    ]
    const phones = [
        {brand : "Samsung", price : 45000},
        {brand : "Realme", price : 15000},
        {brand : "Oppo", price : 25000},
    ]
    return (
        <div className='Lists'>
            {
                names.map((name, key) => (
                    <h1 key={key}>{name}</h1>
                ))
            }
            {
                users.map((user, key) => (
                    <div key={key}>
                        <p>Name: {user.name}</p>
                        <p>Address: {user.address}</p>
                    </div>
                ))
            }
            {
                phones.map((phone, key) => (
                    <List key={key} brand={phone.brand} price={phone.price} />
                ))
            }
        </div>
    );
};

export default Lists;