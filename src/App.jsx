import React from 'react'
import Login from './login'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Forgot from './forgot.jsx'
import Account from './account.jsx'
import { path } from 'framer-motion/client'
import Otp from './otp.jsx'

function App() {
   const router=createBrowserRouter([
    {
      path:"/",
      element:<Login/>
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
    
  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App