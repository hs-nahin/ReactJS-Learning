import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import React from 'react';

const Feature = ({feature}) => {
    return (
        <div className='mt-2 flex'>
            <CheckBadgeIcon className='h-6 w-6 text-white hover:text-sky-500 duration-300 ease-in-out'/>
            <p className='text-start ml-1 mb-2 hover:underline'>
                <span className=''>{feature}</span>
            </p>
        </div>
    );
};

export default Feature;