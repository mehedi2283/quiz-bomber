
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layouts/Main';
import Topics from './components/Topics/Topics';
import Statistics from './components/Statistics/Statistics';
import Blogs from './components/Blogs/Blogs';
import QuizTopic from './components/QuizTopic/QuizTopic';
import { ChevronDoubleRightIcon, ExclamationTriangleIcon } from '@heroicons/react/24/solid'



function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Topics></Topics>
        },
        {
          path: '/topics',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Topics></Topics>
        },
        {
          path: 'statistics',
          element: <Statistics></Statistics>
        },
        {
          path: 'blogs',
          element: <Blogs></Blogs>
        },
        {
          path: 'quiz/:quizid',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizid}`)
          },
          element: <QuizTopic></QuizTopic>

        },


      ],

    },
    {
      path: '*',
      element: <div className='text-6xl bg-white text-center mt-52 text-orange-900 font-black'>
        <h1>No Route Found!</h1>

        <ExclamationTriangleIcon className='h-32 w-32 text-center mx-auto animate-bounce mt-6'></ExclamationTriangleIcon>
        <Link className=' ' to='/topics'>

                    <button className=" text-base bg-orange-900 text-white duration-300 w-1/5 btn2  px-10 py-6 relative rounded-lg uppercase  tracking-wider leading-none overflow-hidden hover:text-white top-0" type="button">
                        <span className="absolute inset-0  bg-green-700"></span>
                        <span className="absolute inset-0 flex justify-around items-center  hover:translate-x-6 hover:justify-between px-4">
                            <p>Go Back</p>
                            <ChevronDoubleRightIcon className='h-6 w-6 '></ChevronDoubleRightIcon>
                        </span>
                    </button>
                </Link>

      </div>
    }


  ])
  return (
    <div className='app-container '>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
