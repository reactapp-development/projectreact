import React from "react";
import { Link } from "react-router-dom";

import japan from "./assets/japan.jpg";
import j from "./assets/j.jpg";
import p from "./assets/p.jpg";
import temp from "./assets/temp.jpg";
import japanz from "./assets/japanz.jpg";
import tokyo from "./assets/tokyo.jpg";
import spring from "./assets/spring.jpg";

const Japan = () => {
  return (
    <div className="min-h-screen bg-[#08111f] text-white">

      {/* Hero Section */}
      <div
        className="relative flex items-center justify-center w-full min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(8,17,31,0.2), rgba(8,17,31,1)), url(${japan})`,
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
            Explore Japan
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
            Explore temples, cities, mountains, and unique Japanese
            experiences.
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="px-6 md:px-12 lg:px-20 py-16">

        <h2 className="text-3xl md:text-5xl font-bold text-[#79b8ff]">
          About Japan
        </h2>

        <p className="max-w-5xl mt-6 text-base md:text-lg text-gray-300 leading-8">
          Japan is a beautiful island country in East Asia where ancient
          traditions blend seamlessly with modern technology. It is famous for
          its stunning cherry blossoms, historic temples, Mount Fuji, and
          vibrant cities like Tokyo and Kyoto. Visitors can enjoy delicious
          cuisine such as sushi and ramen, experience unique cultural
          traditions, and explore breathtaking natural landscapes. With its
          rich history, warm hospitality, and diverse attractions, Japan is a
          destination that offers unforgettable experiences for every traveler.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

          <div className="bg-[#101c33] rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300">
            <h3 className="text-xl md:text-2xl font-bold">
              Famous Places
            </h3>

            <p className="mt-4 text-gray-300 leading-7">
              Tokyo, Kyoto, Mount Fuji, Osaka, Nara, Hiroshima, Hakone,
              Hokkaido, Miyajima Island, and the Arashiyama Bamboo Grove.
            </p>
          </div>

          <div className="bg-[#101c33] rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300">
            <h3 className="text-xl md:text-2xl font-bold">
              Culture
            </h3>

            <p className="mt-4 text-gray-300 leading-7">
              Japan's culture is a unique blend of ancient traditions and
              modern innovation. It is famous for tea ceremonies, kimonos,
              festivals, anime, manga, advanced technology, and exceptional
              hospitality.
            </p>
          </div>

          <div className="bg-[#101c33] rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300">
            <h3 className="text-xl md:text-2xl font-bold">
              Best Time To Visit
            </h3>

            <p className="mt-4 text-gray-300 leading-7">
              The best time to visit Japan is from March to May (spring) for
              the cherry blossoms and from September to November (autumn) for
              pleasant weather and colorful autumn leaves.
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
              src={j}
              alt="Japan"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          {/* Image 2 */}
          <div className="overflow-hidden rounded-2xl shadow-lg group h-64 md:h-80 lg:h-96 cursor-pointer">
            <img
              src={p}
              alt="Kyoto"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          {/* Image 3 */}
          <div className="overflow-hidden rounded-2xl shadow-lg group h-64 md:h-80 lg:h-96 cursor-pointer">
            <img
              src={tokyo}
              alt="Tokyo"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          {/* Image 4 */}
          <div className="overflow-hidden rounded-2xl shadow-lg group h-64 md:h-80 lg:h-96 cursor-pointer">
            <img
              src={temp}
              alt="Temple"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          {/* Image 5 */}
          <div className="overflow-hidden rounded-2xl shadow-lg group h-64 md:h-80 lg:h-96 cursor-pointer">
            <img
              src={spring}
              alt="Cherry Blossoms"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          {/* Image 6 */}
          <div className="overflow-hidden rounded-2xl shadow-lg group h-64 md:h-80 lg:h-96 cursor-pointer">
            <img
              src={japanz}
              alt="Mount Fuji"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

        </div>
      </div>

    </div>
  );
};

export default Japan;