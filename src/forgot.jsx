import React from 'react'
import { Link } from 'react-router-dom';
import Login from './login';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import emailjs from "@emailjs/browser";


function Forgot() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
      const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  
         //OTP sent
    const sendOTP = async () => {
    const newOTP = generateOTP();

    //OTP Generation
    sessionStorage.setItem("otp", newOTP);
    sessionStorage.setItem("email", email);
    

    try {
        await emailjs.send(
            "service_ilkqcn9",
            "template_1d32ydh",
            {
                email: email,
                otp: newOTP,
            },
            "06bXteaS3AvRsJZiv"
        );

        alert("OTP sent successfully!");
        return true;

    } catch (error) {
        alert("Failed to send OTP");
        return false;
    }
    };

    const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

    const handleNext = async () => {

    if (!isEmailValid) {
        alert("Enter a valid email.");
        return;
    }

    console.log("Sending OTP...");

    const success = await sendOTP();

    console.log("OTP sent. Navigating...");

    if (success) {
       navigate("/otp");
    }
    };
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
            placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)}/>
            </div>
          </div>
        </form>
        <div className='ml-10'>
          <button className='bg-black px-25 rounded-xl active:bg-black/60 text-white'type="button" onClick={handleNext}>Get OTP</button>
        </div>
        <div className='ml-25 mt-6'>
          <Link to='/' className='underline pt-2 active:text-green-700'>Go back to login page</Link>
        </div>
          

      </div>
    </div>
  )
}

export default Forgot;