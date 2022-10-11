
import React from 'react';

const Option = ({ option, selectedOption }) => {


    return (
        <div className='rounded border text-center  hover:bg-purple-300 font-semibold '>
            <button onClick={() => selectedOption(option)} className='w-full hover:bg-purple-300 p-6' type="">{option}</button>
            


        </div>
    );
};

export default Option;