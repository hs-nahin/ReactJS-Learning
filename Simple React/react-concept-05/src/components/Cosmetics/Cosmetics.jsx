import 'react';
import add from '../../utilities/calculate';

const Cosmetics = () => {
    const first = 50;
    const second = 50;
    const total = add (first, second);
    return (
        <>
        <div>
            <p>This is Cosmetics Component</p>
            <p>Total : {total}</p>
        </div>
        </>
    );
};

export default Cosmetics;