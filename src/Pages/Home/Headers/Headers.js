import React from 'react';
import { Link } from 'react-router-dom';

const Headers = () => {
    return (

        <div className="navbar bg-base-100 bg-black text-white h-32">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact mt-8 font-extrabold text-lg text-indigo-400 dropdown-content mt-3 p-2 font shadow  rounded-box w-52">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/blogs'>Blogs</Link></li>
                    <li><Link to='/services'>Services</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/signUp'>Sign Up</Link></li>
                    </ul>

                </div>
                
                <a className="btn btn-ghost normal-case text-xl text-indigo-400"><img className='bg-white h-10 rounded-3xl'  src="https://o.remove.bg/downloads/8857582b-3309-41ed-90a5-4b2eb512e5f9/icon-removebg-preview.png" alt="" /> Clicked Photography </a>
            </div>
            <div className="navbar-end lg:flex text-end hidden ">
                <ul className="menu  menu-horizontal p-0 gap-5 font-extrabold text-lg text-indigo-400">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/blogs'>Blogs</Link></li>
                    <li><Link to='/services'>Services</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/signUp'>Sign Up</Link></li>
                </ul>
            </div>
            
        </div>

    );
};

export default Headers;