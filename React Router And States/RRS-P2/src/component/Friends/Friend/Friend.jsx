import { } from 'react';
import { Link } from 'react-router-dom';
import './Friend.css';
const Friend = ({employee}) => {
    const {email, name, id, phone} = employee;
    return (
        <div className='friend'>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <h4>Contact Number: {phone}</h4>
            <Link to={`/friend/${id}`}>More Details</Link>
        </div>
    );
};

export default Friend;