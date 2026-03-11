import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterContextProvider, RouterProvider } from 'react-router'
import Root from './Layouts/Root.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'

const router=createBrowserRouter([
  {
   path:"/",
   Component:Root,
   children:[
    {index:true,Component:Home},
    {
      path:"/About",
      Component:About
    }
   ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
