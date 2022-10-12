import React from 'react';
import Option from '../Option/Option';
import { toast } from 'react-toastify';
import { EyeIcon } from '@heroicons/react/24/solid'
import './QuizQuestions.css'
import 'react-toastify/dist/ReactToastify.css';



const QuizQuestions = ({ question }) => {
  

  // alert(`Correct ans: ${question.correctAnswer}`)
  console.log();
  
  const showCorrectAns = () => {
    toast.info(`Correct ans: ${question.correctAnswer}`,{
      // toastId:customId
    });
  }
    
   

  return (
    <div className=' shadow-2xl w-1/2 mx-auto mt-24 ' >
      <div >
        <br />
        <div className='flex items-center justify-between px-10 quiz-question'>
          <h1 className=' text-lg font-bold  text-center'>
            {(question.question).slice(3,-4)}
          </h1>
          <div>
            <button onClick={showCorrectAns} ><EyeIcon className=' h-6 w-6 hover:text-purple-500 text-purple-300'></EyeIcon></button>
            
          </div>

        </div>
        <br />
        <div className='grid grid-cols-2 gap-1 px-4 quiz-option'>
          {
            question.options.map((option,i) => <Option
              option={option}
              key={i}
              question={question}
              ans={question.correctAnswer}
            ></Option>)
          }
        </div>
        <br />
      </div>
    </div>
  );
};

export default QuizQuestions;
