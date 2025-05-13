import React from 'react';
import { useParams } from 'react-router-dom';
const User = () => {
    const {userid} = useParams();
    return (
        <div>
            <h1 className='text-center text-4xl text-orange-500'>User:{userid}</h1>
        </div>
    );
};

export default User;