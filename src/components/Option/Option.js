
import React from 'react';
import { toast } from 'react-toastify';
import './Option.css'
import { useState } from 'react';

const customId = "custom-id-yes";


const Option = ({ option ,question,ans}) => {
    
    // console.log(option);
    // console.log(ans);
        const [a,setA] = useState();
        console.log(typeof(a));

        const selectedOption = (id) =>{
        
            // const selectedOption1 = document.getElementById('selected-option')
            // console.log(selectedOption1);
            if (id===question.correctAnswer) {
              toast.success(`Correct Ans: Good Job`,{
                // toastId:customId
              });
            //   selectedOption1.classList.remove('red')
            //   selectedOption1.classList.add('green')
      
              // console.log('ture',id);
            }
            else{
              toast.error(`Wrong Ans: Keep Practicing`,{
                // toastId:customId
              });
            //   selectedOption1.classList.remove('green')
            //   selectedOption1.classList.add('red')
              
            }
            
            
            setA(id);
        }

  



    return (
        <div id='selected-option' className={a===ans?'rounded border text-center  hover:bg-purple-300 font-semibold green': 'rounded border text-center  hover:bg-purple-300 font-semibold'}>
            <button  onClick={() => selectedOption(option)} className='w-full hover:bg-purple-300 p-6' type="">{option}</button>
            


        </div>
    );
};

export default Option;