import React from 'react';
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid'
import './Topic.css'

const Topic = ({ topic }) => {
    const { logo, name, total } = topic
    return (
        <div className=' topic-card bg-slate-300 rounded-lg hover:shadow-2xl px-2transition ease-in-out  hover:-translate-y-1 hover:scale-110  duration-100'>
            <img className=' h-72 ' src={logo} alt="" />
            <div className=' px-2 py-2 flex justify-between items-center'>
                <h2 className=' text-xl font-bold'>{name} </h2>
                <p className=' font-semibold'>Total Quiz: {total}</p>
            </div>

            <button className=' rounded-b-lg w-full px-2 transition ease-in-out  bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 py-2'>
                <div className='flex justify-between text-white'>
                    <p>Start Preactice</p>
                    <ChevronDoubleRightIcon className='h-6 w-6 text-white'></ChevronDoubleRightIcon>
                </div>
            </button>
        </div>
    );
};

export default Topic;