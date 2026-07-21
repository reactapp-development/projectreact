import React from "react";
import switzerland from "./assets/switzerland.jpg";
import de from "./assets/de.jpg";
import inter from "./assets/inter.jpg";
import jung from "./assets/jung.jpg";
import matter from "./assets/matter.jpg";
import lake from "./assets/lake.jpg";
const Switzerland = () => {
  return (
    <div className="min-h-screen bg-[#08111f] text-white">

      <div
        className="relative flex items-center justify-center w-full h-screen bg-cover"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(8,17,31,0.2), rgba(8,17,31,1)), url(${switzerland})`
        }}
      >
        <div className="text-center">
          <h1 className="text-[6vw] font-extrabold">
            Explore Switzerland
          </h1>

          <p className="w-[50%] mx-auto mt-[3vh] text-[1.3vw] text-gray-200">
            A breathtaking land of snow-capped Alps, crystal-clear lakes, charming villages, and unforgettable scenic beauty.
            Explore its rich culture, iconic landscapes, adventure experiences, and world-famous destinations.
          </p>
        </div>
      </div>


      <div className="px-[8%] py-[10vh]">

        <h2 className="text-[4vw] font-bold text-[#79b8ff]">
          About Switzerland
        </h2>

        <p className="w-[80%] mt-[3vh] text-[1.2vw] text-gray-300">
         Switzerland is a beautiful European country known for its majestic Alps, scenic lakes, charming villages, and rich cultural heritage.**
         Famous for its watches, chocolates, landscapes, and outdoor adventures, Switzerland offers a perfect blend of nature and modern living.**

        </p>


        <div className="grid grid-cols-3 gap-[3%] mt-[8vh]">

          <div className="p-[5%] rounded-2xl bg-[#101c33]">
            <h3 className="text-[1.8vw] font-bold">
              Famous Places
            </h3>
            <p className="mt-[2vh] text-gray-300">
              Matterhorn Mountain, Lake Geneva, Jung raujoch (Top of Europe), Inte laken, Luce ne, Rhin  Falls, Swis  National Park, Chât au de Chillon Zermatt, Moun  Titlis
            </p>
          </div>


          <div className="p-[5%] rounded-2xl bg-[#101c33]">
            <h3 className="text-[1.8vw] font-bold">
              Culture
            </h3>
            <p className="mt-[2vh] text-gray-300">
             Experience Switzerland's diverse culture through traditional festivals, folk music, Alpine customs, historic arts, and delicious regional cuisines like cheese and chocolate.</p>
          </div>


          <div className="p-[5%] rounded-2xl bg-[#101c33]">
            <h3 className="text-[1.8vw] font-bold">
              Best Time To Visit
            </h3>
            <p className="mt-[2vh] text-gray-300">
              June to September for scenic views and outdoor activities; December to February for snow and skiing.
            </p>
          </div>

        </div>

      </div>
      <div className="min-h-screen w-full">
      <div>
        <div className="flex justify-center text-2xl font-extrabold m-10">
            <h1>Famous Places Gallery</h1>
        </div >
        <div className="flex justify-between">
        <div className="relative overflow-hidden rounded-[2%] group w-[30%] h-[40vh] cursor-point m-5">
          
          <img
           src={switzerland}
            alt="switzerland"
            className="object-cover w-full h-full transition duration-700 group-hover:scale-110"
          />
          
        </div>
        <div className="relative overflow-hidden rounded-[2%] group w-[30%] h-[40vh] cursor-point m-5">
          <img
           src={de}
            alt="de"
            className="object-cover w-full h-full transition duration-700 group-hover:scale-110"
          />
        </div>
         <div className="relative overflow-hidden rounded-[2%] group w-[30%] h-[40vh] cursor-point m-5">
          <img
           src={lake}
            alt="lake"
            className="object-cover w-full h-full transition duration-700 group-hover:scale-110"
          />
        </div>
        </div>

        <div className="flex justify-between">
          <div className="relative overflow-hidden rounded-[2%] group w-[30%] h-[40vh] cursor-point m-5">
          <img
           src={matter}
            alt="matter"
            className="object-cover w-full h-full transition duration-700 group-hover:scale-110"
          />
          </div>
          <div className="relative overflow-hidden rounded-[2%] group w-[30%] h-[40vh] cursor-point m-5">
          <img
           src={jung}
            alt="jung"
            className="object-cover w-full h-full transition duration-700 group-hover:scale-110"
          />
          </div>
          <div className="relative overflow-hidden rounded-[2%] group w-[30%] h-[40vh] cursor-point m-5">
          <img
           src={inter}
            alt="inter"
            className="object-cover w-full h-full transition duration-700 group-hover:scale-110"
          />
          </div>
        </div>

      </div>
      </div>


    </div>
  );
};

export default Switzerland;