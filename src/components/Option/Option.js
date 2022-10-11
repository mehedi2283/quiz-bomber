
import React from 'react';
import { ToastContainer } from 'react-toastify';

const Option = ({ option, selectedOption }) => {


    return (
        <div className='rounded border text-center  hover:bg-purple-300 '>
            <button onClick={() => selectedOption(option)} className='w-full hover:bg-purple-300 p-3' type="">{option}</button>
            <ToastContainer
                position="top-center"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            ></ToastContainer>


        </div>
    );
};

export default Option;