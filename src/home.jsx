import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import india from "./assets/india.jpg";
import japan from "./assets/japan.jpg";
import bgImage from "./assets/images.jpg";
import france from "./assets/france.jpg";
import korea from "./assets/korea.jpg";
import thailand from "./assets/thailand.jpg";
import switzerland from "./assets/switzerland.jpg";
import j from "./assets/j.jpg";

const Home = () => {

  const [slide, setSlide] = useState(0);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const checkMobile = () => {
    setIsMobile(window.innerWidth < 768);
  };

  checkMobile();
  window.addEventListener("resize", checkMobile);

  return () => window.removeEventListener("resize", checkMobile);
}, []);

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

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setReviewIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#08111f] min-h-screen overflow-x-hidden">

      {/* HERO SECTION */}

      <div className="relative flex items-center justify-center w-full h-[55vh] sm:min-h-screen overflow-hidden">

        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage:
              `linear-gradient(to bottom, rgba(80,120,180,0.35), rgba(8,17,31,0.95)), url(${slides[slide].image})`,
          }}
        />

        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4">

          <AnimatePresence mode="wait">

            <motion.div
              key={slide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut"
              }}
              className="flex flex-col items-center mt-16"
            >

              <div className="text-center">

                <motion.h1
                  className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white hover:text-[#d6d450] text-center"
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
                  className="py-[1vh] sm:py-[2vh] text-7vw] sm:text-[5vw] font-extrabold text-[#79b8ff] hover:text-[#ffb703]"
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
                className="w-11/12 sm:w-4/5 md:w-3/4 lg:w-3/5 mt-2 md:mt-10 text-center text-xs sm:text-lg text-gray-200"
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
            className="absolute right-3 sm:right-[5%] z-20 w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition"
          >
            <span className="w-4 h-4 border-r-4 border-t-4 border-white rotate-45"></span>
          </button>

          <button
            onClick={() => setSlide((slide - 1 + slides.length) % slides.length)}
            className="absolute left-3 sm:left-[5%] z-20 w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition"
          >
            <span className="w-4 h-4 border-l-4 border-b-4 border-white rotate-45"></span>
          </button>

        </div>

      </div>

      {/* POPULAR TOURS */}

      <div className="px-5 sm:px-8 lg:px-16 py-10 lg:py-20 text-white bg-[#08111f]">

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5">

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
            className="w-full lg:w-[40%] text-gray-300 text-sm"
          >
            Explore breathtaking destinations carefully selected for unforgettable
            adventures, incredible landscapes, and memorable experiences.
          </motion.p>

        </div>

        <div className="overflow-hidden mt-6 md:mt-[8vh]">

          <motion.div
          key={isMobile ? "mobile" : "desktop"}
            className="flex gap-6 md:gap-8"
            animate={{
              x: ["0%", "-300%"]
            }}
            transition={{
              duration: isMobile ? 12 : 28,
              repeat: Infinity,
              ease: "linear"
            }}
          >

            {[...tours, ...tours].map((tour, index) => (

              <Link
                to={tour.link}
                key={index}
                className="block w-[75%] sm:w-[60%] md:w-[45%] lg:w-[30%] shrink-0"
              >

                <div className="relative overflow-hidden rounded-[2%] group h-56 sm:h-72 md:h-80 lg:h-96">

                  <img
                    src={tour.image}
                    alt={tour.name}
                    className="object-cover w-full h-full transition duration-700 group-hover:scale-110 opacity-70"
                  />

                  <div className="absolute bottom-0 left-0 w-full p-[5%]">

                    <h2 className="text-xl sm:text-2xl font-semibold text-white">
                      {tour.name}
                    </h2>

                  </div>

                </div>

              </Link>

            ))}

          </motion.div>

        </div>

      </div>
            {/* USERS SECTION */}

      <div>

        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold flex justify-center py-5 sm:py-8 text-white"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        >
          Our Users
        </motion.h1>

        <div className="flex flex-col md:flex-row gap-3 md:gap-5 overflow-hidden">

          {[0, 1, 2].map((item) => {

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
                className="px-4 py-4 border border-white rounded-2xl m-3 md:m-6 w-[calc(100%-1.5rem)] md:w-[30%] italic text-white"
              >

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

                    <h1>
                      {current.name}
                    </h1>

                    <p>
                      {current.role}
                    </p>

                  </div>

                </div>

              </motion.div>

            );

          })}

        </div>

      </div>


      {/* FOOTER */}

      <footer className="bg-gray-900 text-white py-6 sm:py-8 mt-6 sm:mt-10">

        <div className="max-w-6xl mx-auto px-4 text-center">

          <h3 className="text-xl font-semibold mb-3">
            Contact Us
          </h3>

          <p className="text-gray-300 mb-2">

            Email:

            <a
              href="#"
              className="text-blue-400 hover:underline ml-2"
            >
              umanggg2006@gmail.com
            </a>

          </p>

          <p className="text-gray-300 mb-4">

            Phone:

            <a
              href="#"
              className="text-blue-400 hover:underline ml-2"
            >
              +91 9317604459
            </a>

          </p>

          <div className="flex flex-wrap justify-center gap-5 mb-4">

            <a
              href="https://www.instagram.com/umangguleria/"
              className="text-gray-400 hover:text-white"
            >
              Instagram
            </a>

            <a
              href="https://www.linkedin.com/in/umang-guleria-947468332/"
              className="text-gray-400 hover:text-white"
            >
              LinkedIn
            </a>

          </div>

          <p className="text-sm text-gray-500">

            © 2026 Traverlly. All rights reserved.

          </p>

        </div>

      </footer>

    </div>
  );

};

export default Home;