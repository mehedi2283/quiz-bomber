import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {

    
    return (
        <div className='navbar py-2 sticky top-0 bg-gray-700 z-50 '>
            <div className='site-name'>
                <Link to="/topics"><h1 className=' font-black text-2xl'>Quiz Bomber</h1></Link>
            </div>
            <div className='link flex justify-between w-1/5'>
                <NavLink to="/topics" className={({ isActive }) =>
              isActive ? 'active' : undefined
            }>Topics</NavLink>
                <NavLink to="/statistics" className={({ isActive }) =>
              isActive ? 'active' : undefined
            }>Statistics</NavLink>
                <NavLink to="/blogs" className={({ isActive }) =>
              isActive ? 'active' : undefined
            }>Blogs</NavLink>
            </div>
        </div>
    );
};

export default Navbar;