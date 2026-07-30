import React from "react";
import { Link } from "react-router-dom";

import korea from "./assets/korea.jpg";
import jeju from "./assets/jeju.jpg";
import park from "./assets/park.jpg";
import village from "./assets/village.jpg";
import tower from "./assets/tower.jpg";
import beach from "./assets/beach.jpg";

const Korea = () => {
  return (
    <div className="min-h-screen bg-[#08111f] text-white">

      {/* Hero Section */}
      <div
        className="relative flex items-center justify-center w-full min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(8,17,31,0.2), rgba(8,17,31,1)), url(${korea})`,
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
            Explore Korea
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
            A land where ancient traditions meet modern innovation, from
            historic palaces to futuristic cities. Explore its vibrant culture,
            delicious cuisine, beautiful landscapes, and global influences like
            K-pop and technology.
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="px-6 md:px-12 lg:px-20 py-16">

        <h2 className="text-3xl md:text-5xl font-bold text-[#79b8ff]">
          About Korea
        </h2>

        <p className="max-w-5xl mt-6 text-base md:text-lg text-gray-300 leading-8">
          Korea is a country in East Asia, known for its rich history,
          cutting-edge technology, traditional culture, and famous foods like
          kimchi. South Korea is especially renowned for K-pop, electronics,
          modern cities like Seoul, and its fascinating blend of ancient
          heritage and contemporary lifestyle.
        </p>

        {/* Information Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

          <div className="bg-[#101c33] rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300">
            <h3 className="text-xl md:text-2xl font-bold">
              Famous Places
            </h3>

            <p className="mt-4 text-gray-300 leading-7">
              Gyeongbokgung Palace, Jeju Island, N Seoul Tower, Bukchon Hanok
              Village, Changdeokgung Palace, Haeundae Beach, Bulguksa Temple,
              Nami Island, Seoraksan National Park, and Lotte World Tower.
            </p>
          </div>

          <div className="bg-[#101c33] rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300">
            <h3 className="text-xl md:text-2xl font-bold">
              Culture
            </h3>

            <p className="mt-4 text-gray-300 leading-7">
              Experience Korea's vibrant festivals, traditional arts, K-pop,
              K-dramas, graceful dances, beautiful hanbok clothing, and diverse
              regional cuisines.
            </p>
          </div>

          <div className="bg-[#101c33] rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300">
            <h3 className="text-xl md:text-2xl font-bold">
              Best Time To Visit
            </h3>

            <p className="mt-4 text-gray-300 leading-7">
              The best time to visit Korea is during spring (April–May) and
              autumn (September–November), when the weather is pleasant and the
              landscapes are filled with cherry blossoms or colorful autumn
              leaves.
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
              src={korea}
              alt="Korea"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          {/* Image 2 */}
          <div className="overflow-hidden rounded-2xl shadow-lg group h-64 md:h-80 lg:h-96 cursor-pointer">
            <img
              src={jeju}
              alt="Jeju Island"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          {/* Image 3 */}
          <div className="overflow-hidden rounded-2xl shadow-lg group h-64 md:h-80 lg:h-96 cursor-pointer">
            <img
              src={village}
              alt="Bukchon Hanok Village"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          {/* Image 4 */}
          <div className="overflow-hidden rounded-2xl shadow-lg group h-64 md:h-80 lg:h-96 cursor-pointer">
            <img
              src={tower}
              alt="N Seoul Tower"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          {/* Image 5 */}
          <div className="overflow-hidden rounded-2xl shadow-lg group h-64 md:h-80 lg:h-96 cursor-pointer">
            <img
              src={park}
              alt="Seoraksan National Park"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          {/* Image 6 */}
          <div className="overflow-hidden rounded-2xl shadow-lg group h-64 md:h-80 lg:h-96 cursor-pointer">
            <img
              src={beach}
              alt="Haeundae Beach"
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

export default Korea;