import React from 'react';
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid'
import './Topic.css'
import { useNavigate, Link } from 'react-router-dom';

const Topic = ({ topic }) => {
    const { logo, name, total, id } = topic



    return (
        <div className=' topic-card bg-slate-300 rounded-lg hover:shadow-2xl px-2transition ease-in-out  hover:-translate-y-1 hover:scale-110  duration-100 mt-6 flex flex-col'>
            <img className=' h-72 relative bg-slate-200 m-2 rounded' src={logo} alt="" />


            <div className=' mt-3'>

                <div className=' px-2 py-2 flex justify-between items-center text-blue-900  '>
                    <h2 className=' text-xl font-bold'>{name} </h2>
                    <p className=' font-semibold'>Total Quiz: {total}</p>
                </div>
                <Link className=' ' to={`/quiz/${id}`}>

                    <button className=" bg-blue-500 text-white duration-300 w-full btn2  px-10 py-6 relative rounded-b-lg uppercase font-semibold tracking-wider leading-none overflow-hidden hover:text-teal-600 top-0" type="button">
                        <span className="absolute inset-0 bg-white"></span>
                        <span className="absolute inset-0 flex justify-around items-center font-bold hover:translate-x-6 hover:animate-pulse">
                            <p>Start Practice</p>
                            <ChevronDoubleRightIcon className='h-6 w-6 '></ChevronDoubleRightIcon>
                        </span>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Topic;