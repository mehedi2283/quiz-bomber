
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layouts/Main';
import Topics from './components/Topics/Topics';
import Statistics from './components/Statistics/Statistics';
import Blogs from './components/Blogs/Blogs';
import QuizTopic from './components/QuizTopic/QuizTopic';
import { ChevronDoubleDownIcon, EmojiSad, ExclamationTriangleIcon } from '@heroicons/react/24/solid'



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

        <ExclamationTriangleIcon className='h-32 w-32 text-center mx-auto'></ExclamationTriangleIcon>

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
