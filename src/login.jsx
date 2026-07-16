import React from "react";
import Forgot from "./forgot";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(){
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleNext = async () => {
    if (!isEmailValid) {
        alert("Enter a valid email.");
        return;
    }
    else {
       navigate("/home");
    }};
  return(
    <div className="w-full h-screen bg-gray-800 flex justify-center items-center" >
      
      <div className="w-[60%] h-[80vh] bg-white flex justify-end items-center rounded-xl">

        <div className="flex justify-start rounded-xl w-[49%] h-[77vh] bg-linear-to-br from-gray-600 via-blue-300 to-gray-950">
          <h1 className="m-6">AstroLink</h1>
        </div>

        <div 
        className=" w-[50%] h-full text-black">
          <div className="ml-6">
            <h1 className="font-semibold font-[Poppins] text-2xl mt-20 ">Welcome Back!</h1>
            <h2 className="text-lg">Log in to continue</h2>
          </div>
          <form>
             <div className="m-5 text-sm">
            <label className="font-semibold">Email</label>
            <div><input className="border border-gray-500 p-2 px-15 rounded-lg"
            type="email"
            placeholder="Enter your email" 
            required
            
            onChange={(e) => setEmail(e.target.value)}/>
            </div>
            
          </div>
          <div className="m-5 text-sm">
            <label className="font-semibold">Password</label>
            <div>
              <input className="border border-gray-500 p-2 px-15 rounded-lg" type="email" type="password"
            placeholder="Enter your password" />
            </div>
          </div>
          </form>
         
          <div className="flex justify-between text-sm mr-8">
            <div className="ml-5">
              <input type="checkbox" />
              <label className="m-1">Remember Me</label>
            </div>
            <div className="text-blue-500 active:text-purple-600">
              <Link to='/forgot' className="underline">Forgot Password?</Link>
            </div>
            
          </div>
        
        <div className="flex justify-center items-center">
          <button className="bg-black text-white text-sm font-semibold mt-6 mb-2 py-1 px-30 rounded-2xl active:bg-gray-500" onClick={handleNext}>Login</button>
        </div>
        <div className="flex items-center">
          <hr className="grow border-gray-300"/>
          <span className="mx-4 text-gray-500">or</span>
          <hr className="grow items-center text-gray-300"/>

        </div >
        <div className="flex justify-center m-5 text-sm">
          <h1>Don't have an account?&nbsp;</h1>
          <Link to='/account' className="text-blue-600 font-semibold active:text-purple-700"> Create new account</Link>
        </div>
        
        </div>

      </div>
      
    </div>
    
  )
}
export default Login;