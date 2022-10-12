
import React from 'react';
import { toast } from 'react-toastify';
import './Option.css'
import { useState } from 'react';

// const customId = "custom-id-yes";


const Option = ({ option, question, ans }) => {


  const [a, setA] = useState("");
 

  const selectedOption = (id) => {

    

    if (id === question.correctAnswer) {
      toast.success(`Correct Ans: Good Job`, {
        // toastId:customId
      });
     
    }
    else {
      toast.error(`Wrong Ans: Keep Practicing`, {
        // toastId:customId
      });
 
    }


    setA(id);
  }




  return (
    <div id='selected-option' className={`${(a.length === 0) ? 'rounded border text-center  hover:bg-purple-300 font-semibold' : (a === ans) ? 'rounded border text-center  hover:bg-purple-300 font-semibold green text-green-700' : 'rounded border text-center hover:bg-purple-300 font-semibold text-red-700 red'}`} >
      <button onClick={() => selectedOption(option)} className='w-full hover:bg-purple-300 p-6' type="">{option}</button>



    </div>
  );
};

export default Option;