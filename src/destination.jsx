import React from "react";
import india from "./assets/india.jpg";
import japan from "./assets/japan.jpg";
import france from "./assets/france.jpg";
import korea from "./assets/korea.jpg";
import switzerland from "./assets/switzerland.jpg";
import thailand from "./assets/thailand.jpg"
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const Destination = () => {
  const destinations = [
  {
    name: "India",
    image: india,
    path: "/india",
    description:
      "Explore the incredible beauty of India, where every state tells a different story. A land of rich heritage, vibrant cultures, iconic landmarks, and unforgettable experiences."
  },
  {
    name: "Japan",
    image: japan,
    path: "/japan",
    description:
      "A beautiful blend of ancient traditions, modern technology, and stunning natural landscapes."
  },
  {
    name: "France",
    image: france,
    path: "/france",
    description:
      "A charming destination known for art, history, cuisine, and iconic landmarks. A land of timeless elegance, rich history, iconic landmarks, art, cuisine, and unforgettable experiences."
  },
  {
    name: "Switzerland",
    image: switzerland,
    path: "/switzerland",
    description:
      "Discover snow-capped peaks, beautiful lakes, and the timeless elegance of Switzerland."
  },
  {
    name: "Korea",
    image: korea,
    path: "/korea",
    description:
      "Experience the perfect blend of tradition, innovation, and breathtaking beauty in South Korea."
  },
  {
    name: "Thailand",
    image: thailand,
    path: "/thailand",
    description:
      "A dream destination offering crystal-clear beaches, exotic landscapes, and warm hospitality."
  },

];
  return (
    <div className="bg-[#08111f] w-full min-h-screen text-white">

      <div className="text-center ">
        <motion.h1
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
         className="text-5xl py-10 font-bold text-blue-400 hover:text-yellow-300 mt-15">
          Explore Our Destinations
        </motion.h1>

        <p className="w-[50%] mx-auto text-gray-300">
          Discover breathtaking places around the world, carefully selected to
          create unforgettable travel experiences. Each itinerary is crafted
          with the precision of high end design.
        </p>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-[8vh] px-5 min-h-screen py-4">

        {destinations.map((destination) => (
          <Link 
            to={destination.path} 
            key={destination.name}
            className="block"
          >

            <div className="rounded-[2%] group overflow-hidden cursor-pointer bg-[#111c2d] ">

              
              <img
                src={destination.image}
                alt={destination.name}
                className="object-cover w-full h-[50vh] transition duration-700 group-hover:scale-110 opacity-70"
              />


              <div className="p-5">

                <h2 className="text-lg font-semibold text-yellow-200 hover:text-blue-300">
                  {destination.name}
                </h2>

                <p className="text-gray-300 mt-2">
                  {destination.description}
                </p>

              </div>

            </div>

          </Link>
        ))}

      </div>
      <footer class="bg-gray-900 text-white py-8 mt-10">
  <div class="max-w-6xl mx-auto px-4 text-center">
    <h3 class="text-xl font-semibold mb-3">Contact Us</h3>

    <p class="text-gray-300 mb-2">
      Email:
      <a href="#" class="text-blue-400 hover:underline">
        hello@gmail.com
      </a>
    </p>

    <p class="text-gray-300 mb-4">
      Phone:
      <a href="#" class="text-blue-400 hover:underline">
        +1 234 567 890
      </a>
    </p>

    <div class="flex justify-center gap-5 mb-4">
      <a href="#" class="text-gray-400 hover:text-white">Facebook</a>
      <a href="#" class="text-gray-400 hover:text-white">Instagram</a>
      <a href="#" class="text-gray-400 hover:text-white">LinkedIn</a>
    </div>

    <p class="text-sm text-gray-500">
      © 2026 Your Company. All rights reserved.
    </p>
  </div>
</footer>

    </div>
  );
};

export default Destination;