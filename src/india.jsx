import React from "react";
import { Link } from "react-router-dom";

import india from "./assets/india.jpg";
import red from "./assets/red.jpg";
import taj from "./assets/taj.jpg";
import golden from "./assets/golden.jpg";
import hawa from "./assets/hawa.jpg";
import lotus from "./assets/lotus.jpg";

const India = () => {
  return (
    <div className="min-h-screen bg-[#08111f] text-white">

      {/* Hero Section */}
      <div
        className="relative flex items-center justify-center w-full min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(8,17,31,0.2), rgba(8,17,31,1)), url(${india})`,
        }}
      >
        <Link
          to="/destination"
          className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8
          px-4 py-2 sm:px-6 sm:py-3 rounded-full
          bg-white/20 backdrop-blur-md border border-white/30
          text-sm sm:text-base font-semibold
          hover:bg-white/40 transition"
        >
          Go To Destination
        </Link>

        <div className="text-center px-6">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold">
            Explore India
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
            Discover the land of diverse cultures, ancient history,
            breathtaking landscapes, and unforgettable experiences.
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="px-6 md:px-12 lg:px-20 py-16">

        <h2 className="text-3xl md:text-5xl font-bold text-[#79b8ff]">
          About India
        </h2>

        <p className="max-w-5xl mt-6 text-base md:text-lg text-gray-300 leading-8">
          India is a country of incredible diversity, where ancient traditions
          meet modern cities. From the snow-covered Himalayas to tropical
          beaches, India offers a journey through history, nature, spirituality,
          and culture.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

          <div className="bg-[#101c33] rounded-2xl p-6 hover:scale-105 transition duration-300 shadow-lg">
            <h3 className="text-xl md:text-2xl font-bold">
              Famous Places
            </h3>

            <p className="mt-4 text-gray-300 leading-7">
              Taj Mahal, Jaipur, Kerala backwaters, Goa beaches, and the
              Himalayan mountains.
            </p>
          </div>

          <div className="bg-[#101c33] rounded-2xl p-6 hover:scale-105 transition duration-300 shadow-lg">
            <h3 className="text-xl md:text-2xl font-bold">
              Culture
            </h3>

            <p className="mt-4 text-gray-300 leading-7">
              Experience festivals, traditional art, music, dance, and
              delicious regional cuisines.
            </p>
          </div>

          <div className="bg-[#101c33] rounded-2xl p-6 hover:scale-105 transition duration-300 shadow-lg">
            <h3 className="text-xl md:text-2xl font-bold">
              Best Time To Visit
            </h3>

            <p className="mt-4 text-gray-300 leading-7">
              October to March is ideal for exploring most destinations with
              pleasant weather.
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

          {/* Card 1 */}
          <div className="overflow-hidden rounded-2xl shadow-lg group h-64 md:h-80 lg:h-96">
            <img
              src={india}
              alt="India"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          {/* Card 2 */}
          <div className="overflow-hidden rounded-2xl shadow-lg group h-64 md:h-80 lg:h-96">
            <img
              src={red}
              alt="Red Fort"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          {/* Card 3 */}
          <div className="overflow-hidden rounded-2xl shadow-lg group h-64 md:h-80 lg:h-96">
            <img
              src={lotus}
              alt="Lotus Temple"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          {/* Card 4 */}
          <div className="overflow-hidden rounded-2xl shadow-lg group h-64 md:h-80 lg:h-96">
            <img
              src={taj}
              alt="Taj Mahal"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          {/* Card 5 */}
          <div className="overflow-hidden rounded-2xl shadow-lg group h-64 md:h-80 lg:h-96">
            <img
              src={golden}
              alt="Golden Temple"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          {/* Card 6 */}
          <div className="overflow-hidden rounded-2xl shadow-lg group h-64 md:h-80 lg:h-96">
            <img
              src={hawa}
              alt="Hawa Mahal"
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

export default India;