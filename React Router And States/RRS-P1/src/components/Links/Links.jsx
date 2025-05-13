import React from 'react';

const Links = ({route}) => {
    return (
        <li className='text-1xl cursor-pointer text-sky-700 ease-in-out duration-200 hover:text-rose-600 md:mr-12'>
          <a href={route.path}>{route.name}</a>  
        </li>
    );
};

export default Links;