import React from "react";
import { Link } from "react-router-dom";

import switzerland from "./assets/switzerland.jpg";
import de from "./assets/de.jpg";
import inter from "./assets/inter.jpg";
import jung from "./assets/jung.jpg";
import matter from "./assets/matter.jpg";
import lake from "./assets/lake.jpg";

const Switzerland = () => {
  return (
    <div className="min-h-screen bg-[#08111f] text-white">

      {/* Hero Section */}
      <div
        className="relative flex items-center justify-center w-full min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(8,17,31,0.2), rgba(8,17,31,1)), url(${switzerland})`,
        }}
      >
        <Link
          to="/destination"
          className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8
          px-4 py-2 sm:px-6 sm:py-3 rounded-full
          bg-white/20 backdrop-blur-md border border-white/30
          text-white text-sm sm:text-base font-semibold
          hover:bg-white/40 transition"
        >
          Go Back To Destination
        </Link>

        <div className="text-center px-6">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold">
            Explore Switzerland
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
            A breathtaking land of snow-capped Alps, crystal-clear lakes,
            charming villages, and unforgettable scenic beauty. Explore its
            rich culture, iconic landscapes, adventure experiences, and
            world-famous destinations.
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="px-6 md:px-12 lg:px-20 py-16">

        <h2 className="text-3xl md:text-5xl font-bold text-[#79b8ff]">
          About Switzerland
        </h2>

        <p className="max-w-5xl mt-6 text-base md:text-lg text-gray-300 leading-8">
          Switzerland is a beautiful European country known for its majestic
          Alps, crystal-clear lakes, charming villages, and rich cultural
          heritage. Famous for its world-class watches, chocolates, scenic
          landscapes, and outdoor adventures, Switzerland offers a perfect
          blend of nature, luxury, and modern living.
        </p>

        {/* Information Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

          <div className="bg-[#101c33] rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300">
            <h3 className="text-xl md:text-2xl font-bold">
              Famous Places
            </h3>

            <p className="mt-4 text-gray-300 leading-7">
              Matterhorn, Lake Geneva, Jungfraujoch (Top of Europe),
              Interlaken, Lucerne, Rhine Falls, Swiss National Park,
              Château de Chillon, Zermatt, and Mount Titlis.
            </p>
          </div>

          <div className="bg-[#101c33] rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300">
            <h3 className="text-xl md:text-2xl font-bold">
              Culture
            </h3>

            <p className="mt-4 text-gray-300 leading-7">
              Experience Switzerland's diverse culture through traditional
              festivals, Alpine customs, folk music, historic architecture,
              and delicious regional specialties like Swiss cheese and
              chocolate.
            </p>
          </div>

          <div className="bg-[#101c33] rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300">
            <h3 className="text-xl md:text-2xl font-bold">
              Best Time To Visit
            </h3>

            <p className="mt-4 text-gray-300 leading-7">
              June to September is ideal for sightseeing, hiking, and outdoor
              adventures, while December to February is perfect for skiing and
              enjoying the snowy Alpine landscapes.
            </p>
          </div>

        </div>
      </div>

      {/* Gallery Section */}
      <div className="px-6 md:px-12 lg:px-20 pb-20">

        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-12">
          Famous Places Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Image 1 */}
          <div className="overflow-hidden rounded-2xl shadow-lg group h-64 md:h-80 lg:h-96 cursor-pointer">
            <img
              src={switzerland}
              alt="Switzerland"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          {/* Image 2 */}
          <div className="overflow-hidden rounded-2xl shadow-lg group h-64 md:h-80 lg:h-96 cursor-pointer">
            <img
              src={de}
              alt="Swiss Alps"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          {/* Image 3 */}
          <div className="overflow-hidden rounded-2xl shadow-lg group h-64 md:h-80 lg:h-96 cursor-pointer">
            <img
              src={lake}
              alt="Lake Geneva"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          {/* Image 4 */}
          <div className="overflow-hidden rounded-2xl shadow-lg group h-64 md:h-80 lg:h-96 cursor-pointer">
            <img
              src={matter}
              alt="Matterhorn"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          {/* Image 5 */}
          <div className="overflow-hidden rounded-2xl shadow-lg group h-64 md:h-80 lg:h-96 cursor-pointer">
            <img
              src={jung}
              alt="Jungfraujoch"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          {/* Image 6 */}
          <div className="overflow-hidden rounded-2xl shadow-lg group h-64 md:h-80 lg:h-96 cursor-pointer">
            <img
              src={inter}
              alt="Interlaken"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

        </div>
      </div>
      {/* Go To Top Button */}
<div className="flex justify-center pb-10">

  <button
    onClick={() => window.scrollTo({
      top: 0,
      behavior: "smooth"
    })}
    className="
      px-6 py-3 
      rounded-full
      bg-[#79b8ff]
      text-[#08111f]
      font-bold
      hover:bg-yellow-300
      transition
      shadow-lg
    "
  >
    Go To Top ↑
  </button>

</div>

    </div>
  );
};

export default Switzerland;