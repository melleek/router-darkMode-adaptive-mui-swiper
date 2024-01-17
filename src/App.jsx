import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Shop from './pages/Shop/Shop'
import "./App.css"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './style.css';
import NotFound from './pages/NotFound/NotFound'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/shop",
        element: <Shop />
      },
      {
        path: "/notfound",
        element: <NotFound/>
      }
    ]
  }
])


function App() {
  return <RouterProvider router={router} />
}

export default App