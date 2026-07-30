import React from "react";
import { Link } from "react-router-dom";

import france from "./assets/france.jpg";
import f from "./assets/f.jpg";
import r from "./assets/r.jpg";
import a from "./assets/a.jpg";
import n from "./assets/n.jpg";
import c from "./assets/c.jpg";
import e from "./assets/e.jpg";

const Japan = () => {
  return (
    <div className="min-h-screen bg-[#08111f] text-white">
      {/* Hero Section */}
      <div
        className="relative flex items-center justify-center min-h-screen bg-cover bg-center px-6"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(8,17,31,0.2), rgba(8,17,31,1)), url(${france})`,
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
            Visit France
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
            Discover the romance of Paris, historic landmarks, breathtaking
            countryside, and unforgettable French culture.
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="px-6 sm:px-10 lg:px-20 py-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#79b8ff]">
          About France
        </h2>

        <p className="max-w-5xl mt-6 text-base sm:text-lg text-gray-300 leading-8">
          France is a beautiful country in Western Europe, famous for its rich
          history, art, fashion, and world-renowned cuisine. It is home to
          iconic landmarks like the Eiffel Tower, the Louvre Museum, and the
          Palace of Versailles. From the romantic streets of Paris to the
          stunning French Riviera and picturesque countryside, France offers
          unforgettable experiences for every traveler. Its unique culture,
          delicious food, and beautiful landscapes make it one of the world's
          most popular tourist destinations.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          <div className="bg-[#101c33] rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-bold">Famous Places</h3>

            <p className="mt-4 text-gray-300 leading-7">
              Paris, Eiffel Tower, Louvre Museum, Palace of Versailles, Mont
              Saint-Michel, French Riviera (Côte d'Azur), Nice, Lyon, Bordeaux,
              Disneyland Paris.
            </p>
          </div>

          <div className="bg-[#101c33] rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-bold">Culture</h3>

            <p className="mt-4 text-gray-300 leading-7">
              France's culture is renowned for its art, fashion, cuisine,
              literature, and rich history. It is famous for fine dining, wine,
              festivals, museums, and a deep appreciation for creativity and
              elegance.
            </p>
          </div>

          <div className="bg-[#101c33] rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-bold">Best Time To Visit</h3>

            <p className="mt-4 text-gray-300 leading-7">
              The best time to visit France is from April to June (spring) and
              September to October (autumn), when the weather is pleasant,
              crowds are smaller, and the scenery is at its best.
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
          <div className="overflow-hidden rounded-2xl group h-64 md:h-80">
            <img
              src={f}
              alt="Paris"
              className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
            />
          </div>

          <div className="overflow-hidden rounded-2xl group h-64 md:h-80">
            <img
              src={r}
              alt="Eiffel Tower"
              className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
            />
          </div>

          <div className="overflow-hidden rounded-2xl group h-64 md:h-80">
            <img
              src={a}
              alt="Louvre Museum"
              className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
            />
          </div>

          <div className="overflow-hidden rounded-2xl group h-64 md:h-80">
            <img
              src={n}
              alt="Versailles"
              className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
            />
          </div>

          <div className="overflow-hidden rounded-2xl group h-64 md:h-80">
            <img
              src={c}
              alt="French Riviera"
              className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
            />
          </div>

          <div className="overflow-hidden rounded-2xl group h-64 md:h-80">
            <img
              src={e}
              alt="Mont Saint-Michel"
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

export default Japan;