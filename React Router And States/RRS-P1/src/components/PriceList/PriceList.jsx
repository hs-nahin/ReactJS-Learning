import React, { useEffect, useState } from 'react';
import PriceCard from './PriceCard/PriceCard';

const PriceList = () => {
    const [prices, setPrices] = useState([]);
    useEffect(()=>{
        fetch ('prices.json')
        .then (res => res.json())
        .then (data => setPrices(data));
    }, [])
    return (
        <div className='mx-12 text-sky-700'>
            <div className="grid md:grid-cols-3 gap-4">
            {
                prices.map (price => <PriceCard
                key={price.id}
                price={price}
                />)
            }
            </div>
        </div>
    );
};

export default PriceList;