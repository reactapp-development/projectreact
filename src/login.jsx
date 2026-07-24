import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);


  const handleNext = () => {

    if (!isEmailValid) {
      alert("Enter a valid email.");
      return;
    }

    navigate("/home");

  };


  return (

    <div className="min-h-screen bg-gray-800 flex justify-center items-center p-4 pt-10">


      <div className="
        w-full 
        sm:w-11/12 
        md:w-4/5 
        lg:w-3/5 
        min-h-[80vh]
        bg-white 
        rounded-xl 
        overflow-hidden
        flex 
        flex-col 
        lg:flex-row
      ">


        {/* Left Side */}

        <div
          className="
          w-full 
          lg:w-1/2 
          h-52 
          sm:h-64 
          lg:h-auto
          flex 
          items-start
          rounded-t-xl
          lg:rounded-l-xl
          lg:rounded-tr-none
          bg-linear-to-br 
          from-gray-600 
          via-blue-300 
          to-gray-950
          "
        >

          <h1 className="text-white text-2xl font-semibold m-6">
            Hello User
          </h1>


        </div>



        {/* Right Side */}

        <div
          className="
          w-full 
          lg:w-1/2 
          p-6
          text-black
          "
        >


          <div className="mb-8">

            <h1 className="
              font-semibold 
              text-2xl 
              sm:text-3xl
              mt-4
            ">
              Welcome Back!
            </h1>


            <h2 className="text-lg text-gray-600">
              Log in to continue
            </h2>

          </div>



          <form>


            {/* Email */}

            <div className="mb-5 text-sm">

              <label className="font-semibold">
                Email
              </label>


              <input
                className="
                w-full
                mt-2
                border 
                border-gray-500 
                p-3 
                rounded-lg
                outline-none
                "
                type="email"
                placeholder="Enter your email"
                required
                onChange={(e)=>setEmail(e.target.value)}
              />


            </div>



            {/* Password */}

            <div className="mb-5 text-sm">


              <label className="font-semibold">
                Password
              </label>


              <input
                className="
                w-full
                mt-2
                border 
                border-gray-500 
                p-3 
                rounded-lg
                outline-none
                "
                type="password"
                placeholder="Enter your password"
              />


            </div>


          </form>




          {/* Remember + Forgot */}

          <div className="
            flex 
            flex-col 
            sm:flex-row
            justify-between 
            items-start
            sm:items-center
            gap-3
            text-sm
          ">


            <div>

              <input 
                type="checkbox"
              />

              <label className="ml-2">
                Remember Me
              </label>

            </div>



            <Link
              to="/forgot"
              className="
              text-blue-500
              underline
              active:text-purple-600
              "
            >
              Forgot Password?
            </Link>


          </div>





          {/* Login Button */}

          <button
            onClick={handleNext}
            className="
            w-full
            bg-black
            text-white
            font-semibold
            mt-8
            py-3
            rounded-2xl
            active:bg-gray-500
            "
          >
            Login
          </button>






          {/* Divider */}

          <div className="
            flex 
            items-center 
            gap-4
            my-6
          ">


            <hr className="grow border-gray-300"/>


            <span className="text-gray-500">
              or
            </span>


            <hr className="grow border-gray-300"/>


          </div>






          {/* Create Account */}

          <div className="
            flex 
            flex-wrap
            justify-center
            text-center
            text-sm
          ">


            <span>
              Don't have an account?
            </span>


            <Link
              to="/account"
              className="
              ml-1
              text-blue-600
              font-semibold
              active:text-purple-700
              "
            >

              Create new account

            </Link>


          </div>



        </div>



      </div>



    </div>

  );
}

export default Login;