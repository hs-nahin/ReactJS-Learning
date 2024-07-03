import 'react';
import { useContext } from 'react';
import { CountContext } from '../../App';


const NavInside = () => {
    const countState = useContext(CountContext);
    return (
        <div>
            <button>NavInside {countState}</button>
        </div>
    );
};

export default NavInside;