import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar py-2'>
            <div className='name'>
                <Link to="/"><h1 className='text-violet-400 font-black text-2xl'>Quiz Bomber</h1></Link>
            </div>
            <div className='link flex justify-between w-1/5'>
                <Link to="/">Topics</Link>
                <Link to="statistics">Statistics</Link>
                <Link to="blogs">Blogs</Link>
            </div>
        </div>
    );
};

export default Navbar;