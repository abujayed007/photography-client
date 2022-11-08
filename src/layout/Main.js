import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer/Footer';
import Banner from '../Pages/Home/Banner/Banner';
import Headers from '../Pages/Home/Headers/Headers';
import Home from '../Pages/Home/Home/Home';

const Main = () => {
    return (
        <div>
           <Headers></Headers>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Main;