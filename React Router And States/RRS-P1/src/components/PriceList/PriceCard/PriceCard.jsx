import React from 'react';
import Feature from './Feature/Feature';

const PriceCard = ({price}) => {
    return (
        <div className='bg-blue-200 mt-5 rounded-sm p-10 hover:bg-blue-100 ease-in-out duration-300 flex flex-col'>
            <h2 className='text-center'>
                <span className='text-4xl'>
                    {price.price}
                </span>
                <span className='text-2xl'>/month</span>
            </h2>
            <h3 className='text-2xl text-center hover:text-rose-600 ease-in-out duration-300'>{price.name}</h3>
            <p className='text-start mt-5'>Features:</p>
            {
                price.features.map((feature, idx) => <Feature
                key={idx}
                feature={feature}
                />)
            }
            <button className='w-full h-10 mt-auto rounded-sm bg-sky-700 text-sky-50 mt-5 hover:bg-rose-600 duration-300 ease-in-out'>Subscribe</button>
        </div>
    );
};

export default PriceCard;