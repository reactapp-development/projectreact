import React from "react";
import { Link } from "react-router-dom";

import thailand from "./assets/thailand.jpg";
import historicalt from "./assets/historicalt.jpg";
import phit from "./assets/phit.jpg";
import palacet from "./assets/palacet.jpg";
import phuket from "./assets/phuket.jpg";
import wat from "./assets/wat.jpg";

const Thailand = () => {
  return (
    <div className="min-h-screen bg-[#08111f] text-white">
      {/* Hero Section */}
      <div
        className="relative flex items-center justify-center min-h-screen bg-cover bg-center px-6"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(8,17,31,0.2), rgba(8,17,31,1)), url(${thailand})`,
        }}
      >
        <Link
          to="/destination"
          className="absolute top-4 right-4 sm:top-8 sm:right-8 px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm sm:text-base font-semibold hover:bg-white/40 transition"
        >
          Go To Destination
        </Link>

        <div className="text-center max-w-4xl">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold">
            Explore Thailand
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
            A vibrant land of tropical beaches, ancient temples, colorful
            festivals, and rich cultural traditions. Explore its stunning
            landscapes, delicious cuisine, warm hospitality, and unforgettable
            experiences.
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="px-6 sm:px-10 lg:px-20 py-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#79b8ff]">
          About Thailand
        </h2>

        <p className="max-w-4xl mt-6 text-base sm:text-lg text-gray-300 leading-8">
          Thailand is a beautiful Southeast Asian country known for its golden
          temples, tropical islands, rich culture, and flavorful cuisine.
          Famous for its beaches, festivals, history, and friendly people,
          Thailand offers a perfect mix of tradition and modern life.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          <div className="bg-[#101c33] rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-bold">Famous Places</h3>

            <p className="mt-4 text-gray-300 leading-7">
              Grand Palace Bangkok, Wat Arun Bangkok, Phuket Island, Phi Phi
              Islands, Chiang Mai Temples, Ayutthaya Historical Park, Krabi
              Beaches, Khao Sok National Park, Railay Beach, Maya Bay.
            </p>
          </div>

          <div className="bg-[#101c33] rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-bold">Culture</h3>

            <p className="mt-4 text-gray-300 leading-7">
              Experience Thailand’s vibrant culture through traditional
              festivals, temple ceremonies, Thai dance, arts, music, and
              delicious regional cuisines.
            </p>
          </div>

          <div className="bg-[#101c33] rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-bold">Best Time To Visit</h3>

            <p className="mt-4 text-gray-300 leading-7">
              The best time to visit Thailand is from November to February,
              offering cool weather, clear skies, and perfect conditions for
              beaches, sightseeing, and outdoor adventures.
            </p>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="px-6 sm:px-10 lg:px-20 pb-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Famous Places Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Image 1 */}
          <div className="overflow-hidden rounded-2xl group h-64 md:h-80">
            <img
              src={thailand}
              alt="Thailand"
              className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
            />
          </div>

          {/* Image 2 */}
          <div className="overflow-hidden rounded-2xl group h-64 md:h-80">
            <img
              src={historicalt}
              alt="Historical Place"
              className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
            />
          </div>

          {/* Image 3 */}
          <div className="overflow-hidden rounded-2xl group h-64 md:h-80">
            <img
              src={palacet}
              alt="Grand Palace"
              className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
            />
          </div>

          {/* Image 4 */}
          <div className="overflow-hidden rounded-2xl group h-64 md:h-80">
            <img
              src={phit}
              alt="Phi Phi Islands"
              className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
            />
          </div>

          {/* Image 5 */}
          <div className="overflow-hidden rounded-2xl group h-64 md:h-80">
            <img
              src={phuket}
              alt="Phuket"
              className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
            />
          </div>

          {/* Image 6 */}
          <div className="overflow-hidden rounded-2xl group h-64 md:h-80">
            <img
              src={wat}
              alt="Wat Temple"
              className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
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

export default Thailand;