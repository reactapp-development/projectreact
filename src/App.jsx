import React from 'react'
import Login from './login'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Forgot from './forgot.jsx'
import Account from './account.jsx'
import Otp from './otp.jsx'
import Password from './password.jsx'
import Home from './home.jsx'

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
    {
      path:"/password",
      element:<Password/>
    },
    {
      path:"/home",
      element:<Home/>
    }
    
  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App