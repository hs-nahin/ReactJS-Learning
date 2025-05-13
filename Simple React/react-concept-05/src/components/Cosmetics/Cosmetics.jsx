import {} from 'react';
import { add } from '../../utilities/calculate';

const Cosmetics = () => {
    const first = 50;
    const second = 50;
    const totalCos = add (first, second);
    return (
        <>
        <div>
            <h1>This is Cosmetics Component</h1>
            <p>Total : {totalCos}</p>
        </div>
        </>
    );
};

export default Cosmetics;