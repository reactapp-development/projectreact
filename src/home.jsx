import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import india from "./assets/india.jpg";
import japan from "./assets/japan.jpg";
import bgImage from "./assets/images.jpg";
import france from "./assets/france.jpg"
import korea from "./assets/korea.jpg"
import thailand from "./assets/thailand.jpg"
import switzerland from "./assets/switzerland.jpg"
import j from "./assets/j.jpg"

const Home = () => {
  const [slide, setSlide] = useState(0);
  const [reviewIndex, setReviewIndex] = useState(0);

  const tours = [
  {
    name: "India",
    image: india,
    link: "/india",
  },
  {
    name: "Japan",
    image: japan,
    link: "/japan",
  },
  {
    name: "France",
    image: france,
    link: "/france",
  },
  {
    name: "Korea",
    image: korea,
    link: "/korea",
  },
  {
    name: "Thailand",
    image: thailand,
    link: "/thailand",
  },
  {
    name: "Switzerland",
    image: switzerland,
    link: "/switzerland",
  }
];

const slides = [
  {
    image: bgImage,
    title: "Explore the World",
    subtitle: "Where Every Journey Begins",
    description:
      "From hidden gems to iconic landmarks, we help you plan every step of your perfect journey. Explore new cultures, discover beautiful places, and create memories that last a lifetime.",
  },
  {
    image: india,
    title: "Discover India",
    subtitle: "Culture Meets Adventure",
    description:
      "Experience ancient history, beautiful landscapes, and unforgettable traditions. Discover rich cultures, stunning places, and memorable adventures across India.",
  },
  {
    image: japan,
    title: "Visit Japan",
    subtitle: "Tradition Meets Technology",
    description:
      "Explore temples, cities, mountains, and unique Japanese experiences. Experience Japan's rich culture, stunning landscapes, and the harmony between tradition and technology.",
  },
  
];

  useEffect(() => {
  const slideInterval = setInterval(() => {
    setSlide((prev) => (prev + 1) % slides.length);
  }, 5000);

  return () => clearInterval(slideInterval);
}, []);


  useEffect(() => {
  const interval = setInterval(() => {
    setReviewIndex((prev) => (prev + 1) % reviews.length);
  }, 3000);

  return () => clearInterval(interval);
}, []);
  
const reviews = [
  {
    text: "An unparalleled level of service. Our trip to Japan was meticulously planned, blending traditional stays with cutting-edge experiences.",
    name: "Rohan Sharma",
    role: "Venture Partner",
    image: j,
    rating: 5,
  },
  {
    text: "It handles the complexity so I can enjoy the serenity. Their hidden-gem recommendations are truly world-class.",
    name: "Krish Gusain",
    role: "Interior Architect",
    image: india,
    rating: 4,
  },
  {
    text: "From private jets to exclusive museum entries, This app made our anniversary expedition unforgettable.",
    name: "Shirshika Pandey",
    role: "Tech Executive",
    image: france,
    rating: 5,
  },
  {
    text: "Amazing travel planning with unforgettable experiences.",
    name: "Rajnath Singh",
    role: "Photographer",
    image: japan,
    rating: 3,
  },
];
  return (
    <div className="bg-[#08111f] min-h-screen overflow-x-hidden">
      <div
        className=" relative flex items-center justify-center w-full min-h-screen overflow-hidden "
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(80,120,180,0.35), rgba(8,17,31,0.95)), url(${slides[slide].image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          <AnimatePresence mode="wait">

  <motion.div
    key={slide}
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    
    transition={{
      duration: 0.8,
      ease: "easeOut"
    }}
    className="flex flex-col items-center"
  >

    <div className="text-center">

      <motion.h1
        className=" text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white hover:text-[#d6d450] text-center "
        initial={{ opacity: 0, y: "-20vh" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "-20vh" }}
        transition={{
          duration: 0.8,
          delay: 0.1
        }}
      >
        {slides[slide].title}
      </motion.h1>


      <motion.h1
        className="py-[2vh] text-[5vw] font-extrabold text-[#79b8ff] hover:text-[#ffb703]"
        initial={{ opacity: 0, y: "-20vh" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "-20vh" }}
        transition={{
          duration: 0.8,
          delay: 0
        }}
      >
        {slides[slide].subtitle}
      </motion.h1>

    </div>


    <motion.p
      className=" w-11/12 sm:w-4/5 md:w-3/4 lg:w-3/5 mt-10 md:mt-20 text-center text-base sm:text-lg text-gray-200 "
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{
        duration: 0.8,
        delay: 0
      }}
    >
      {slides[slide].description}
    </motion.p>


  </motion.div>

</AnimatePresence>
          <button
            onClick={() => setSlide((slide + 1) % slides.length)}
            className="absolute right-[5%] z-20 w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition"
          >
            <span className="w-4 h-4 border-r-4 border-t-4 border-white rotate-45"></span>
          </button>
          <button
            onClick={() => setSlide((slide - 1 + slides.length) % slides.length)}
            className="absolute left-[5%] z-20 w-14 h-14 rounded-full bg-white/20 hover:bg-white/40 flex  items-center justify-center transition"
          >
            <span className="w-4 h-4 border-l-4 border-b-4 border-white rotate-45"></span>
          </button>
        </div>
      </div>

      <div className=" px-5 sm:px-8 lg:px-16 py-16 lg:py-24 text-white bg-[#08111f] ">
        <div className="flex items-end justify-between">
          <div>

            <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-300 hover:text-yellow-300"
            initial={{ opacity: 0, x: "-15vh" }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
          >
            Popular Tours
          </motion.h1>

          </div>

          <motion.p
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          className="w-full lg:w-[40%] text-gray-300"
          >
            Explore breathtaking destinations carefully selected for unforgettable
            adventures, incredible landscapes, and memorable experiences.
          </motion.p>
        </div>

         
        <div className="overflow-hidden mt-[8vh]">

<motion.div
  className="flex gap-8"
  animate={{
    x: ["0%", "-50%"]
  }}
  transition={{

  duration: 10,
  repeat: Infinity,
  ease: "linear"

  }}
>

{[...tours, ...tours].map((tour, index) => (

<Link 
  to={tour.link}
  key={index}
  className="block w-[85%] sm:w-[70%] md:w-[45%] lg:w-[30%] shrink-0" >

<div className="relative overflow-hidden rounded-[2%] group h-60 sm:h-72 md:h-80 lg:h-96">

<img
  src={tour.image}
  alt={tour.name}
  className=" object-cover  w-full  h-full  transition  duration-700  group-hover:scale-110  opacity-70"
/>

<div className="absolute bottom-0 left-0 w-full p-[5%]">
<h2 className="text-2xl font-semibold text-white">
{tour.name}
</h2>
</div>

</div>

</Link>

))}

</motion.div>

</div>
      </div>
      <div>
            <div>
  <motion.h1
   className="text-5xl font-extrabold flex justify-center p-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
   >
    Our Users
  </motion.h1>

  <div className="flex flex-col md:flex-row gap-5 overflow-hidden">

    {[0,1,2].map((item) => {
      const current =
        reviews[(reviewIndex + item) % reviews.length];

      return (
        <motion.div
        key={`${reviewIndex}-${item}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
        duration: 0.8,
        ease: "easeInOut"
        }}
        className="px-4 py-4 border border-white rounded-2xl m-4 md:m-10 w-full md:w-[30%] italic" >

          <div className="text-yellow-400 text-xl">
            {"★".repeat(current.rating)}
            {"☆".repeat(5 - current.rating)}
          </div>

          <p className="mt-3">
            "{current.text}"
          </p>

          <div className="flex mt-5">

            <img
              src={current.image}
              alt="user"
              className="w-9 h-9 rounded-full object-cover"
            />

            <div className="not-italic ml-4">
              <h1>{current.name}</h1>
              <p>{current.role}</p>
            </div>

          </div>

        </motion.div>
      );
    })}

  </div>
</div>
          </div>
          <footer className="bg-gray-900 text-white py-8 mt-10">
  <div className="max-w-6xl mx-auto px-4 text-center">
    <h3 className="text-xl font-semibold mb-3">Contact Us</h3>

    <p className="text-gray-300 mb-2">
      Email:
      <a href="#" class="text-blue-400 hover:underline">
        umanggg2006@gmail.com
      </a>
    </p>

    <p className="text-gray-300 mb-4">
      Phone:
      <a href="#" class="text-blue-400 hover:underline">
        +1 234 567 890
      </a>
    </p>

    <div className="flex flex-wrap justify-center gap-5 mb-4">
      <a href="https://www.instagram.com/umangguleria/" className="text-gray-400 hover:text-white">Instagram</a>
      <a href="https://www.linkedin.com/in/umang-guleria-947468332?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="text-gray-400 hover:text-white">LinkedIn</a>
    </div>

    <p className="text-sm text-gray-500">
      © 2026 Your Company. All rights reserved.
    </p>
  </div>
</footer>
    </div>
  );
};

export default Home;