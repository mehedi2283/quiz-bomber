import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestions from './../QuizQuestion/QuizQuestions';

const QuizTopic = () => {

    const quizDetails = useLoaderData();

    const { name, questions } = quizDetails.data;
    // console.log(name);
    // console.log(questions);
    // console.log(quizDetails);
    return (
        <div className='text-center text-violet-900 mt-6'>
            <h1 className=' text-2xl font-black'>Quiz of {name} </h1>
            <div className='mt-6'>
                {
                    questions.map(question => 
            
                        <QuizQuestions
                            question={question}
                            key={question.id}
                        ></QuizQuestions>

                    )
                }
            </div>
        </div>
    );
};

export default QuizTopic;