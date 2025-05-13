import { } from 'react';
import { useLoaderData } from 'react-router-dom';
import './FriendDetails.css';
const FriendDetails = () => {
    const friend = useLoaderData();
    return (
        <div className='friendDetail'>
            <h2>Employee Information :</h2>
            <h3>Name: {friend.name}</h3>
            <p>User Name: {friend.username}</p>
            <p>Email: {friend.email}</p>
            <p>Website: {friend.website}</p>
            <h3>Contact Number: {friend.phone}</h3>
        </div>
    );
};

export default FriendDetails;