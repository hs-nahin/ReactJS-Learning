import 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
        .then(()=> {})
        .catch(error => console.error(error))
    }
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <button className="btn btn-ghost text-xl">Auth Master</button>
                <Link className="btn btn-ghost text-xl" to='/'>Home</Link>
                <Link className="btn btn-ghost text-xl" to='/orders'>Orders</Link>
                <Link className="btn btn-ghost text-xl" to='/register'>Register</Link>
            {
            user ? <>
            <button className="btn btn-primary">{user.email}</button>
            <button onClick={handleLogOut} className="btn btn-error">Sign Out</button>
            </>
                : <Link className="btn btn-ghost text-xl" to='/login'>LogIn</Link>
            }
            </div>
        </div>
    );
};

export default Header;