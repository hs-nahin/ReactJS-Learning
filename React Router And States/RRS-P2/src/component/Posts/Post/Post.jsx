import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css';
const Post = ({post}) => {
    const {id, title, body} = post;
    return (
        <div className='post'>
            <p>ID : {id}</p>
            <h3>Title : {title}</h3>
            <Link to={`/post/${id}`}><button>Details</button></Link>
        </div>
    );
};

export default Post;