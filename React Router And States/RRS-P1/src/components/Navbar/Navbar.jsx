import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import Links from '../Links/Links';

const Navbar = () => {
  const [open, setOpen] = useState(false);

    const routes = [
        {
          "id": 1,
          "name": "Home",
          "path": "/home"
        },
        {
          "id": 2,
          "name": "About",
          "path": "/about"
        },
        {
          "id": 3,
          "name": "Contact",
          "path": "/contact"
        },
        {
          "id": 4,
          "name": "Services",
          "path": "/services"
        },
        {
          "id": 5,
          "name": "Products",
          "path": "/products"
        }
    ];
      
    return (
        <div>
            <nav>
              <div onClick={()=>setOpen(!open)} className='md:hidden'>
                <span>
                  {
                    open === true ? <XMarkIcon className='h-6 w-6 hover:text-sky-700 cursor-pointer'/>
                    : <Bars2Icon className='h-6 w-6 hover:text-sky-700 cursor-pointer'/>
                  }
                </span>
              
              
              </div>
                <ul className={`pl-14 pr-5 pb-5 pt-5 md:flex absolute md:static duration-500 bg-blue-100 ${open ? 'left-0' : '-left-60'}`}>
                    {
                        routes.map(route => <Links 
                          key={route.id}
                          route = {route}
                          />)
                    }
                </ul>
                <h1 className={`absolute top-10 right-20 mr-40 mt-2 text-2xl text-${open ? '1xl' : '3xl'} font-sm-bold text-sky-700 hover:text-rose-600 ease-in-out duration-300`}>
          HASNAT
        </h1>
            </nav>
        </div>
    );
};

export default Navbar;
