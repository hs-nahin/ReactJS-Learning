import 'react';
import { useContext, useState } from 'react';
import { CountContext } from '../../App';
import { HelloContext } from '../Context/HelloContext';
import HelloNav from '../HelloNav/HelloNav';


const NavInside = () => {
    const countState = useContext(CountContext);

    const [hello, setHello] = useState('Hello Nav');
    return (
        <div>
            <button>NavInside {countState}</button>
                <HelloContext.Provider value={[hello, setHello]}>
                    <HelloNav/>
                </HelloContext.Provider>
        </div>
    );
};

export default NavInside;