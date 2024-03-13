import 'react';
import { useLoaderData } from 'react-router-dom';

const Phone = () => {
    const phone = useLoaderData();
    return (
        <div>
            <h1>Phone Brand : {phone.brand}</h1>
            <p>Color : {phone.color}</p>
        </div>
    );
};

export default Phone;