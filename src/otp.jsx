import React from "react";
import { Link } from "react-router-dom";

function Otp() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-linear-to-br from-gray-600 via-blue-300 to-gray-950">
      <div className="bg-white/30 w-[50%] rounded-xl text-black p-8">
        
        <div>
          <h1 className="text-xl font-semibold">
            Verify OTP
          </h1>
          <h2 className="text-sm mt-2">
            Enter the OTP sent to your email
          </h2>
        </div>

        <div className="mt-6">
          <label className="font-semibold text-sm">
            OTP
          </label>

          <div className="flex gap-3 mt-2">
            <input 
              className="w-12 h-12 text-center border border-gray-500 rounded-lg"
              type="text"
              maxLength="1"
            />
            <input 
              className="w-12 h-12 text-center border border-gray-500 rounded-lg"
              type="text"
              maxLength="1"
            />
            <input 
              className="w-12 h-12 text-center border border-gray-500 rounded-lg"
              type="text"
              maxLength="1"
            />
            <input 
              className="w-12 h-12 text-center border border-gray-500 rounded-lg"
              type="text"
              maxLength="1"
            />
            <input 
              className="w-12 h-12 text-center border border-gray-500 rounded-lg"
              type="text"
              maxLength="1"
            />
            <input 
              className="w-12 h-12 text-center border border-gray-500 rounded-lg"
              type="text"
              maxLength="1"
            />
          </div>
        </div>


        <div className="flex justify-center mt-8">
          <button className="bg-black text-white px-20 py-2 rounded-xl active:bg-gray-700">
            Verify OTP
          </button>
        </div>


        <div className="text-center mt-5">
          <Link 
            to="/forgot"
            className="underline text-blue-700">
            Change Email
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Otp;