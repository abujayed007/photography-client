import React from 'react';
import { Outlet } from 'react-router-dom';
import useTitle from '../hooks/useTitle';
import Footer from '../Pages/Footer/Footer';
import Banner from '../Pages/Home/Banner/Banner';
import Headers from '../Pages/Home/Headers/Headers';
import Home from '../Pages/Home/Home/Home';

const Main = () => {
    useTitle('Home')
    return (
        <div>
           <Headers></Headers>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Main;