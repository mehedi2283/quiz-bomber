import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Option from '../Option/Option';
import { EyeIcon } from '@heroicons/react/24/solid'


const QuizQuestions = ({ question }) => {
  // console.log(question);

  // alert(`Correct ans: ${question.correctAnswer}`)
  const showCorrectAns = () => {
    toast.info(`Correct ans: ${question.correctAnswer}`, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
    }
    const selectedOption = (id) =>{
      if (id===question.correctAnswer) {
        toast.success(`Correct Ans: Good Job`, {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      }
      else{
        toast.error(`Wrong Ans: Keep Practicing`, {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      }

  }


  return (
    <div className=' shadow-2xl w-1/2 mx-auto mt-24 ' >
      <div >
        <br />
        <div className='flex items-center justify-between px-10'>
          <h1 className=' text-lg font-bold  text-center'>
            {question.question}
          </h1>
          <div>
            <button onClick={showCorrectAns} ><EyeIcon className=' h-6 w-6 hover:text-purple-500 text-purple-300'></EyeIcon></button>
            <ToastContainer
              position="top-center"
              autoClose={2000}
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

        </div>
        <br />
        <div className='grid grid-cols-2 gap-1 px-4'>
          {
            question.options.map(option => <Option
              option={option}
              selectedOption={selectedOption}
            ></Option>)
          }
        </div>
        <br />
      </div>
    </div>
  );
};

export default QuizQuestions;
