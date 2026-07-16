import React from 'react'
import Login from './login'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Forgot from './forgot.jsx'
import Account from './account.jsx'
import Otp from './otp.jsx'
import Password from './password.jsx'
import Home from './home.jsx'
import AccountVerification from "./accountverification.jsx";
import Contact from './contact.jsx'
import Navbar from './navbar.jsx'
import About from './about.jsx'

function App() {
   const router=createBrowserRouter([
    {
      path:"/",
      element:<><Navbar/><Home/></>
    },
    {
      path:"/about",
      element:<><Navbar/><About/></>
    },
    {
      path:"/login",
      element:<><Navbar/><Login/></>
    },
    {
      path:"/home",
      element:<><Navbar/><Home/></>
    },
    {
      path:"/contact",
      element:<><Navbar/><Contact/></>
    },
    {
      path:"/forgot",
      element:<Forgot/>
    },
    {
      path:"/otp",
      element:<Otp/>
    },
    {
      path:"/account",
      element:<Account/>
    },
    {
      path:"/password",
      element:<Password/>
    },
    {
      path:"/accountverification",
      element:<AccountVerification/>
    },
    
    
  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App