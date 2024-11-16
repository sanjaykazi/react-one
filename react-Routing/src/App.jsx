import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css'
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import About from './components/About';
// import Dashboard from './components/Dashboard';
const router = createBrowserRouter(
  [
    {
      path:"/",
      element: <Home />,
    },
    {
      path:"/about",
      element:<About />,
    },
    {
      path:"/dashboard",
      element:<Dashboard />,
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
