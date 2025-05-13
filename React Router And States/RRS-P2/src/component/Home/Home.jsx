import { } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import './Home.css';
const Home = () => {
    return (
        <div className='home'>
            <Header/>
            <h1>Home Page.</h1>
            <Outlet/>
        </div>
    );
};

export default Home;