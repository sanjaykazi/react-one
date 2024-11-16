import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css'
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import About from './components/About';
import Navbr from './components/Navbr';
import ParamComp from './components/ParamComp';
import Courses from './components/Courses';
import MockTests from './components/MockTests';
import Reports from './components/Reports';
import NotFound from './components/NotFound';
// import Dashboard from './components/Dashboard';
const router = createBrowserRouter(
  [
    {
      path:"/",
      element: 
      <div>
        <Navbr />
        <Home />
      </div>,
    },
    {
      path:"/about",
      element:
      <div>
        <Navbr />
        <About />
      </div>,
    },
    {
      path:"/dashboard",
      element:
      <div>
        <Navbr />
        <Dashboard />
      </div>,
      children:[
        {
          path:"courses",
          element:
          <div>
            <Courses />
          </div>,
        },
        {
          path:"mock-tests",
          element:
          <div>
            <MockTests />
          </div>,
        },
        {
          path:"reports",
          element:
          <div>
            <Reports />
          </div>,
        }
      ]
    },
    {
      path:"/student/:id",
      element:
      <div>
        <Navbr />
        <ParamComp />
      </div>
    },
    {
      path: '*',
      element:
      <div>
        <NotFound />
      </div>
    }
  ]
);
function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
