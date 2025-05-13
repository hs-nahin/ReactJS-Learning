import React from 'react';
import SchoolFriend from './SchoolFriend/SchoolFriend';

const friendsList = [
    { name: 'Tafsinur Rahman Emon', age: 23 },
    { name: 'Farhan Ahmed Masud', age: 24 },
];

const SchoolFriends = () => {
    return (
        <>
           <ul>
            {
                friendsList.map((fL, index) => <SchoolFriend
                key={index}
                title={fL.name}
                age={fL.age}
                />)
            }
           </ul>
        </>
    );
};

export default SchoolFriends;
