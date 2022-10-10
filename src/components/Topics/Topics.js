import React from 'react';
import { ChevronDoubleDownIcon } from '@heroicons/react/24/solid'
import "./Topics.css"
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {

    const topics = useLoaderData();
    console.log(topics.data);




    return (
        <div>
            <header className='header mb-8 mx-auto'>
                <div className='text-center flex flex-col items-center'>
                    <div>
                        <h1 className=' font-black text-5xl'>Welcome to Quiz Bomber.</h1>
                        <br /><br /> <br /><br />
                        <h3>Please select a topic from bellow.</h3>
                    </div>
                    br
                    
                    <div>
                        <ChevronDoubleDownIcon className="h-6 w-6 text-center " />
                    </div>
                </div>


            </header>

            <div className='grid grid-cols-4 justify-items-center w-9/12 mx-auto pb-10'>
               {topics.data.map( topic => <Topic
                topic= {topic}
                key = {topic.id}
                ></Topic>)}
            </div>
        </div>


    );
};

export default Topics;