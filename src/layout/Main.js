import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer/Footer';
import Headers from '../Pages/Home/Headers/Headers';
import Home from '../Pages/Home/Home/Home';

const Main = () => {
    return (
        <div>
           <Home></Home>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Main;