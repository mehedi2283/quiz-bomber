import React from 'react';
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid'
import './Topic.css'
import { useNavigate, Link } from 'react-router-dom';

const Topic = ({ topic }) => {
    const { logo, name, total, id } = topic

    

    return (
        <div className=' topic-card bg-slate-300 rounded-lg hover:shadow-2xl px-2transition ease-in-out  hover:-translate-y-1 hover:scale-110  duration-100 mt-6'>
            <img className=' h-72 ' src={logo} alt="" />
            <div className=' px-2 py-2 flex justify-between items-center'>
                <h2 className=' text-xl font-bold'>{name} </h2>
                <p className=' font-semibold'>Total Quiz: {total}</p>
            </div>

            {/* <button className=' rounded-b-lg w-full px-2 transition ease-in-out  bg-blue-500   hover:bg-indigo-500 duration-300 py-2'>
                <div className='flex justify-around hover:translate-x-6 duration-300 text-white'>
                    <p>Start Preactice</p>
                    <ChevronDoubleRightIcon className='h-6 w-6 text-white '></ChevronDoubleRightIcon>
                </div>
            </button> */}
            <Link to={`/quiz/${id}`}>

                <button className="bg-blue-500 text-white duration-300 w-full btn2 mt-12 px-10 py-5 relative rounded-b-lg uppercase font-semibold tracking-wider leading-none       overflow-hidden hover:text-teal-600" type="button">
                    <span className="absolute inset-0 bg-white"></span>
                    <span className="absolute inset-0 flex justify-around items-center font-bold hover:translate-x-6">
                        <p>Start Practice</p>
                        <ChevronDoubleRightIcon className='h-6 w-6 '></ChevronDoubleRightIcon>
                    </span>
                </button>
            </Link>
        </div>
    );
};

export default Topic;