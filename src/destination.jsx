import React from "react";
import india from "./assets/india.jpg";
import japan from "./assets/japan.jpg";
import france from "./assets/france.jpg";
import korea from "./assets/korea.jpg";
import switzerland from "./assets/switzerland.jpg";
import thailand from "./assets/thailand.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Destination = () => {
  const destinations = [
    {
      name: "India",
      image: india,
      path: "/india",
      description:
        "Explore the incredible beauty of India, where every state tells a different story. A land of rich heritage, vibrant cultures, iconic landmarks, and unforgettable experiences.",
    },
    {
      name: "Japan",
      image: japan,
      path: "/japan",
      description:
        "A beautiful blend of ancient traditions, modern technology, and stunning natural landscapes.",
    },
    {
      name: "France",
      image: france,
      path: "/france",
      description:
        "A charming destination known for art, history, cuisine, and iconic landmarks. A land of timeless elegance, rich history, iconic landmarks, art, cuisine, and unforgettable experiences.",
    },
    {
      name: "Switzerland",
      image: switzerland,
      path: "/switzerland",
      description:
        "Discover snow-capped peaks, beautiful lakes, and the timeless elegance of Switzerland.",
    },
    {
      name: "Korea",
      image: korea,
      path: "/korea",
      description:
        "Experience the perfect blend of tradition, innovation, and breathtaking beauty in South Korea.",
    },
    {
      name: "Thailand",
      image: thailand,
      path: "/thailand",
      description:
        "A dream destination offering crystal-clear beaches, exotic landscapes, and warm hospitality.",
    },
  ];

  return (
    <div className="bg-[#08111f] w-full min-h-screen text-white">
      {/* Heading */}
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          className="text-5xl py-10 font-bold text-blue-400 hover:text-yellow-300 mt-15"
        >
          Explore Our Destinations
        </motion.h1>

        <p className="w-[50%] mx-auto text-gray-300">
          Discover breathtaking places around the world, carefully selected to
          create unforgettable travel experiences. Each itinerary is crafted
          with the precision of high-end design.
        </p>
      </div>

      {/* Destination Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-[8vh] px-5 py-4">
        {destinations.map((destination, index) => (
          <Link
            to={destination.path}
            key={destination.name}
            className="block"
          >
            <motion.div
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -150 : 150,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.03,
              }}
              className="rounded-2xl overflow-hidden cursor-pointer bg-[#111c2d] shadow-lg"
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="object-cover w-full h-[50vh] transition duration-700 group-hover:scale-110 opacity-80"
              />

              <div className="p-5">
                <h2 className="text-2xl font-semibold text-yellow-200 hover:text-blue-300">
                  {destination.name}
                </h2>

                <p className="text-gray-300 mt-3">
                  {destination.description}
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-xl font-semibold mb-3">Contact Us</h3>

          <p className="text-gray-300 mb-2">
            Email:{" "}
            <a
              href="mailto:hello@gmail.com"
              className="text-blue-400 hover:underline"
            >
              hello@gmail.com
            </a>
          </p>

          <p className="text-gray-300 mb-4">
            Phone:{" "}
            <a
              href="tel:+1234567890"
              className="text-blue-400 hover:underline"
            >
              +1 234 567 890
            </a>
          </p>

          <div className="flex justify-center gap-5 mb-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Facebook
            </a>

            <a href="#" className="text-gray-400 hover:text-white">
              Instagram
            </a>

            <a href="#" className="text-gray-400 hover:text-white">
              LinkedIn
            </a>
          </div>

          <p className="text-sm text-gray-500">
            © 2026 Your Company. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Destination;