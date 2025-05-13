import { useContext, useState } from 'react';
import UserContext from '../../context/UserContext';
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username, password});
    }
    return (
        <div>
            <h1>Login</h1>
            <input type="text" placeholder="username" value={username} onChange={(event) => setUsername(event.target.value)} />
            {" "}
            <input type="password" placeholder="password" value={password} onChange={ event => setPassword(event.target.value)} />
            <button onClick={handleSubmit} type="submit">Login</button>
        </div>
    );
};

export default Login;