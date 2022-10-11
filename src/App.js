
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layouts/Main';
import Topics from './components/Topics/Topics';
import Statistics from './components/Statistics/Statistics';
import Blogs from './components/Blogs/Blogs';
import QuizTopic from './components/QuizTopic/QuizTopic';


function App() {const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children:[
      {
        path: '/',
        loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz'),
        element:<Topics></Topics>
      },
      {
        path: '/topics',
        loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz'),
        element:<Topics></Topics>
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
        loader: async ({params})=> {
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizid}`)
        },
        element:<QuizTopic></QuizTopic>
        
      },
  
  
    ],
    
  }

  
])
return (
  <div className='app-container '>
    <RouterProvider router={router}></RouterProvider>
  </div>
);
}

export default App;
