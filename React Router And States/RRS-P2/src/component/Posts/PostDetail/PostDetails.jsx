import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import './PostDetails.css';
const PostDetails = () => {
    const post = useLoaderData();
    const {id, body} = post;
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    }
    return (
        <div className='post-detail'>
            <h2>Post No : <span>{id}</span></h2>
            <h3><span>Post :</span> {body}</h3>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;