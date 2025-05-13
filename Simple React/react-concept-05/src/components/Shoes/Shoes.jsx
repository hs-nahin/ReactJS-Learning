import 'react';
import { multiply } from '../../utilities/calculate';

const Shoes = () => {
    const a = 5;
    const b = 10;
    const totalShoes = multiply(a, b);
    return (
        <div>
            <h1>This is Shoes Component</h1>
            <p>Total Shoes : {totalShoes}</p>
        </div>
    );
};

export default Shoes;