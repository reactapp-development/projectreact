import React from 'react'
import { Link } from 'react-router-dom';
import Login from './login';
import { useNavigate } from 'react-router-dom';


function Forgot() {
  const navigate = useNavigate();
  return (
    <div className='w-full h-screen flex justify-center items-center bg-linear-to-br from-gray-600 via-blue-300 to-gray-950'>
      <div className=' bg-white/30 h-[50vh] w-[50%] rounded-xl text-black'>
      <div>
        <h1 className='text-xl mt-6 ml-6 font-semibold'>Forgot Password?</h1>
        <h2 className='ml-6 text-sm'>Please, write your email to receive an OTP </h2>
      </div>
        <form>
          <div className="m-5 text-sm ">
            <label className="font-semibold">Email</label>
            <div><input className="border border-gray-500 p-2 px-15 rounded-lg" type="email"
            placeholder="Enter your email" />
            </div>
          </div>
        </form>
        <div className='ml-10'>
          <button  onClick={() => navigate("/otp")} className='bg-black px-25 rounded-xl active:bg-black/60 text-white'>Get OTP</button>
        </div>
        <div className='ml-25 mt-6'>
          <Link to='/' className='underline pt-2 active:text-green-700'>Go back to login page</Link>
        </div>
          

      </div>
    </div>
  )
}

export default Forgot;