/* eslint-disable react/prop-types */
import 'react';
import NavInside from '../NavInside/NavInside';

const Navbar = ({count}) => {
    return (
        <div>
            <button>Navbar Count {count}</button>
            <NavInside count={count}/>
        </div>
    );
};

export default Navbar;