import React from 'react';
import { ChevronDoubleDownIcon } from '@heroicons/react/24/solid'
import "./Topic.css"

const Topics = () => {



    
    return (
        <div className='header'>
            <div className='text-center flex flex-col items-center'>
                <div>
                    <h1>Welcome to Quiz Bomber.</h1>
                    <h3>Please select a topic from bellow.</h3>
                </div>
                <br /><br />
                <div>
                    <ChevronDoubleDownIcon className="h-6 w-6 text-center " />

                </div>
            </div>
        </div>
    );
};

export default Topics;