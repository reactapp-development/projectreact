import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import india from "./assets/india.jpg";
import japan from "./assets/japan.jpg";
import bgImage from "./assets/images.jpg";
import france from "./assets/france.jpg"
import  "animate.css";

const Home = () => {
  const [slide, setSlide] = useState(0);
  const slides = [
  {
    image: bgImage,
    title: "Explore the World",
    subtitle: "Where Every Journey Begins",
    description:
      "From hidden gems to iconic landmarks, we help you plan every step of your perfect journey.",
  },
  {
    image: india,
    title: "Discover India",
    subtitle: "Culture Meets Adventure",
    description:
      "Experience ancient history, beautiful landscapes, and unforgettable traditions.",
  },
  {
    image: japan,
    title: "Visit Japan",
    subtitle: "Tradition Meets Technology",
    description:
      "Explore temples, cities, mountains, and unique Japanese experiences.",
  },
];
  return (
    <div className="bg-[#08111f] min-h-screen">
      <div
        className="relative flex items-center justify-center w-full h-screen overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(80,120,180,0.35), rgba(8,17,31,0.95)), url(${slides[slide].image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          <div className="text-center">
            <motion.h1
              className="text-[5vw] font-extrabold text-white"
              initial={{ opacity: 0, y: "-20vh" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1 }}
            >
              {slides[slide].title}
            </motion.h1>

            <motion.h1
              className="py-[2vh] text-[5vw] font-extrabold text-[#79b8ff]"
              initial={{ opacity: 0, y: "-20vh" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {slides[slide].subtitle}
            </motion.h1>
          </div>

          <motion.p
            className="w-[45%] mt-[5vh] text-center text-[1.2vw] text-gray-200"
            initial={{ opacity: 0, y: "15vh" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
          >
            {slides[slide].description}
          </motion.p>
          <button
          onClick={() =>
          setSlide((slide + 1) % slides.length)
           }
           className="absolute right-[5%] text-5xl text-white z-20"
          >
           →
          </button>
          <button
            onClick={() =>
              setSlide((slide - 1 + slides.length) % slides.length)
            }
            className="absolute left-[5%] z-20 text-5xl text-white cursor-pointer"
          >
            ←
          </button>
        </div>
      </div>

      <div className=" px-[8%] py-[10vh] text-white bg-[#08111f]">
        <div className="flex items-end justify-between">
          <div>

            <motion.h1
            className="text-[4vw] font-bold"
            initial={{ opacity: 0, x: "-15vh" }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
          >
            Popular Tours
          </motion.h1>

          </div>

          <p className="w-[50%] text-gray-300">
            Explore breathtaking destinations carefully selected for unforgettable
            adventures, incredible landscapes, and memorable experiences.
          </p>
        </div>

         
        <div className="flex gap-8 mt-[8vh]">

          <Link to="/india" className="block w-[30%]">
          <div className="relative overflow-hidden rounded-[2%] group h-[40vh] cursor-point">
            <img
              src={india}
              alt="India"
              className="object-cover w-full h-full transition duration-700 group-hover:scale-110 opacity-70 "
            />

            <div className="absolute bottom-0 left-0 w-full p-[5%]">
              <h2 className="text-[2vw] font-bold text-white">
                India
              </h2>
            </div>
          </div>
          </Link>

          <Link to="/japan" className="block  w-[30%]">
          <div className="relative overflow-hidden rounded-[2%] group h-[40vh] cursor-pointer">
            <img
              src={japan}
              alt="Japan"
              className="object-cover w-full h-full transition duration-700 group-hover:scale-110 opacity-70"
            />

            <div className="absolute bottom-0 left-0 w-full p-[5%]">
              <h2 className="text-[2vw] font-bold text-white">
                Japan
              </h2>

            </div>
          </div>
          </Link>

          <Link to="/france" className="block w-[30%]">
          <div className="relative overflow-hidden rounded-[2%] group h-[40vh]">
            <img
              src={france}
              alt="France"
              className="object-cover w-full h-full transition duration-700 group-hover:scale-110 opacity-70"
            />


            <div className="absolute bottom-0 left-0 w-full p-[5%]">
              <h2 className="text-[2vw] font-bold text-white">
                France
              </h2>

            </div>
          </div>
          </Link>

        </div>

      </div>
      <div>
            <div>
              <h1 className=" text-5xl font-extrabold flex justify-center p-8 ">Our Users</h1>
              <div className="flex justify-between">
                
              <div className=" px-4 py-4 border border-white rounded-2xl m-10 w-[50%] italic">"An unparalleled level of service. Our trip to Japan was meticulously planned. blending traditional stays with cutting-edge experiences."
                <div className="flex">
                <div>
                  <img src={japan} 
                  alt="user1" 
                  className="w-9 h-9 rounded-full mt-4"/>
                </div>

                <div className="not-italic ml-4">
                  <h1 className="pt-4 ">Julian Thorne</h1>
                  <p>Venture Partner</p>
                </div>
                </div>
              </div>
              <div className=" px-4 py-4 border border-white rounded-2xl m-10 w-[50%] italic">" It handles the complexity so i can enjoy the serenity. Their hidden-gem recommendations are truly world-class."
                <div className="flex">
                <div>
                  <img src={india} 
                  alt="user1" 
                  className="w-9 h-9 rounded-full mt-4"/>
                </div>

                <div className="not-italic ml-4">
                  <h1 className="pt-4 ">Elena Rossi</h1>
                  <p>Interior Architect</p>
                </div>
                </div>
              </div>
              <div className=" px-4 py-4 border border-white rounded-2xl m-10 w-[50%] italic">"From private jets to exclusive museum entries, Travelly made our anniversary expedition unforgettable."
                <div className="flex">
                <div>
                  <img src={france} 
                  alt="user1" 
                  className="w-9 h-9 rounded-full mt-4"/>
                </div>

                <div className="not-italic ml-4">
                  <h1 className="pt-4 ">Marcus Chen</h1>
                  <p>Tech Executive</p>
                </div>
                </div>
              </div>
              </div>
            </div>
          </div>
    </div>
  );
};

export default Home;