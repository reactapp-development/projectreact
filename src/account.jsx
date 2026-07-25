import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

const Account = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  password: "",
  confirmPassword: "",
});
const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);

  // OTP Generation
  const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  // Send OTP
  const sendOTP = async () => {
    const newOTP = generateOTP();

    sessionStorage.setItem("accountOTP", newOTP);
    sessionStorage.setItem("email", formData.email);

    try {
      await emailjs.send(
        "service_ilkqcn9",
        "template_1d32ydh",
        {
          email: formData.email,
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

  // Email verification
  const handleNext = async () => {
    if (!isEmailValid) {
      alert("Enter a valid email.");
      return;
    }

    const success = await sendOTP();

    if (success) {
  sessionStorage.setItem(
    "newUser",
    JSON.stringify(formData)
  );

  navigate("/accountverification");
}
}

  return (
    <div className="min-h-screen flex justify-center items-center p-4 bg-linear-to-br from-gray-600 via-blue-300 to-gray-950 text-black overflow-x-hidden">
      <div className="w-full sm:w-11/12 md:w-4/5 lg:w-2/3 xl:w-1/2 p-6 rounded-2xl bg-white/20 backdrop-blur-lg">
        <div>
          <h1 className="font-semibold text-2xl">Welcome!</h1>

          <p className="text-sm mt-2">
            Let's help you get started
          </p>
        </div>

        <div className="mt-6 space-y-4">
          {/* Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="font-semibold text-sm">
                First Name
              </label>

              <input
               type="text"
               name="firstName"
               value={formData.firstName}
               onChange={handleChange}
               placeholder="Enter your First name"
               className="w-full mt-2 border border-gray-500 p-3 rounded-lg"/>
            </div>

            <div>
              <label className="font-semibold text-sm">
                Last Name
              </label>

              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your Last name"
                className="w-full mt-2 border border-gray-500 p-3 rounded-lg"
              />
            </div>
          </div>

          {/* Phone + Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="font-semibold text-sm">
                Phone
              </label>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your number"
                className="w-full mt-2 border border-gray-500 p-3 rounded-lg"
              />
            </div>

            <div>
              <label className="font-semibold text-sm">
                Email
              </label>

              <input
                className="w-full mt-2 border border-gray-500 p-3 rounded-lg"
                type="email"
                placeholder="Enter your Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="font-semibold text-sm">
                Password
              </label>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your Password"
                className="w-full mt-2 border border-gray-500 p-3 rounded-lg"
              />
            </div>

            <div>
              <label className="font-semibold text-sm">
                Confirm Password
              </label>

              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Re-enter your password"
                className="w-full mt-2 border border-gray-500 p-3 rounded-lg"
              />
            </div>
          </div>

          {/* Checkboxes */}
          <div className="text-sm space-y-2 mt-5">
            <div>
              <input type="checkbox" />

              <label className="ml-2">
                I want to receive latest news and course updates.
              </label>
            </div>

            <div>
              <input type="checkbox" />

              <label className="ml-2">
                I agree to terms and conditions.
              </label>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={handleNext}
            className="w-full sm:w-auto bg-black text-white font-semibold px-10 py-3 rounded-xl active:bg-gray-700"
          >
            Create Account
          </button>
        </div>

        {/* Login */}
        <div className="flex justify-center mt-4 text-sm gap-1">
          <h3>Already have an account?</h3>

          <Link
            to="/login"
            className="text-blue-700 active:text-purple-600"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Account;