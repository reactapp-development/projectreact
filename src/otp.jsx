import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Otp() {
  const navigate = useNavigate();
   const [timeLeft, setTimeLeft] = useState(30);

    //OTP Storage
    const [otp, setOtp] = useState("");

  const handleNext = async () => {
    const storedOTP = sessionStorage.getItem("otp");

    if (otp.trim() === storedOTP) {
        alert("OTP verification successful");

        navigate("/Confirm/NewPass");

    } else {
        alert("Invalid OTP");
    }
};

 // Timer
   useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
}, [timeLeft]);
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
          <label>
            <p>OTP expires in {timeLeft}s</p>
          </label>

          <div className="flex gap-3 mt-2">
            <input
                type="text"
                maxLength={6}
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="border p-2 rounded"
            />
          </div>
        </div>


        <div className="flex justify-center mt-8">
          <button className="bg-black text-white px-20 py-2 rounded-xl active:bg-gray-700"  onClick={handleNext}>
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