import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Otp() {

  const navigate = useNavigate();

  const [timeLeft, setTimeLeft] = useState(30);

  const [otp, setOtp] = useState("");



  const handleNext = () => {

    const storedOTP = sessionStorage.getItem("otp");


    if (otp.trim() === storedOTP) {

      alert("OTP verification successful");

      navigate("/password");

    } else {

      alert("Invalid OTP");

    }

  };




  // Timer
  useEffect(() => {

    if(timeLeft <= 0) return;


    const timer = setTimeout(() => {

      setTimeLeft(timeLeft - 1);

    },1000);


    return () => clearTimeout(timer);


  },[timeLeft]);




  return (

    <div
      className="
      min-h-screen
      flex
      justify-center
      items-center
      p-4
      bg-linear-to-br
      from-gray-600
      via-blue-300
      to-gray-950
      "
    >


      <div
        className="
        w-full
        sm:w-4/5
        md:w-1/2
        lg:w-2/5
        bg-white/30
        rounded-xl
        text-black
        p-6
        sm:p-8
        backdrop-blur-lg
        "
      >


        <div>

          <h1
            className="
            text-xl
            sm:text-2xl
            font-semibold
            text-center
            "
          >
            Verify OTP
          </h1>


          <h2
            className="
            text-sm
            mt-4
            text-center
            "
          >
            Enter the OTP sent to your email
          </h2>


        </div>





        <div className="mt-6">


          <label className="font-semibold text-sm">
            OTP
          </label>


          <p className="text-sm mt-2">
            OTP expires in {timeLeft}s
          </p>




          <input
            type="text"
            maxLength={6}
            value={otp}
            onChange={(e)=>setOtp(e.target.value)}
            className="
            w-full
            mt-3
            border
            border-gray-500
            p-3
            rounded-lg
            outline-none
            text-center
            tracking-widest
            text-lg
            "
          />


        </div>







        <div className="flex justify-center mt-8">


          <button

            className="
            w-full
            sm:w-auto
            bg-black
            text-white
            font-semibold
            px-10
            py-3
            rounded-xl
            active:bg-gray-700
            "

            onClick={handleNext}

          >

            Verify OTP

          </button>


        </div>







        <div className="text-center mt-5">


          <Link

            to="/forgot"

            className="
            underline
            text-blue-700
            "

          >

            Change Email

          </Link>


        </div>



      </div>


    </div>

  );

}


export default Otp;