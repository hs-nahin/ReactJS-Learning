import React from 'react';
import Friend from './Friend/Friend';

const Friends = () => {
    return (
        <>
            <div className='first'>
                <Friend name={'Rakibul Huda Rakib'}/>
                <Friend name={'Shad Hossain Tibro'}/>
                <Friend name={'Minhajul Kabir'}/>
            </div>
        </>
    );
};

export default Friends;
