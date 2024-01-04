import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './PostDetails.css';
const PostDetails = () => {
    const post = useLoaderData();
    const {id, body} = post;
    return (
        <div className='post-detail'>
            <h2>Post No : {id}</h2>
            <h3>Post : {body}</h3>
        </div>
    );
};

export default PostDetails;