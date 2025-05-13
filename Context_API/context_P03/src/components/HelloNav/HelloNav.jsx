import 'react';
import { useContext } from 'react';
import { HelloContext } from '../Context/HelloContext';

const HelloNav = () => {
    const [hello, setHello] = useContext(HelloContext);
    return (
        <div>
            <button>{hello}</button>
        </div>
    );
};

export default HelloNav;