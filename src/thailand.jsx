import React from "react";
import thailand from "./assets/thailand.jpg";
import historicalt from "./assets/historicalt.jpg"
import phit from "./assets/phit.jpg"
import palacet from "./assets/palacet.jpg"
import phuket from "./assets/phuket.jpg"
import wat from "./assets/wat.jpg"

const Thailand = () => {
  return (
    <div className="min-h-screen bg-[#08111f] text-white">

      <div
        className="relative flex items-center justify-center w-full h-screen bg-cover"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(8,17,31,0.2), rgba(8,17,31,1)), url(${thailand})`
        }}
      >
        <div className="text-center">
          <h1 className="text-[6vw] font-extrabold">
            Explore Thailand
          </h1>

          <p className="w-[50%] mx-auto mt-[3vh] text-[1.3vw] text-gray-200">
            A vibrant land of tropical beaches, ancient temples, colorful festivals, and rich cultural traditions.
            Explore its stunning landscapes, delicious cuisine, warm hospitality, and unforgettable experiences.
          </p>
        </div>
      </div>


      <div className="px-[8%] py-[10vh]">

        <h2 className="text-[4vw] font-bold text-[#79b8ff]">
          About Thailand
        </h2>

        <p className="w-[80%] mt-[3vh] text-[1.2vw] text-gray-300">
          Thailand is a beautiful Southeast Asian country known for its golden temples, tropical islands, rich culture, and flavorful cuisine.
          Famous for its beaches, festivals, history, and friendly people, Thailand offers a perfect mix of tradition and modern life.
        </p>


        <div className="grid grid-cols-3 gap-[3%] mt-[8vh]">

          <div className="p-[5%] rounded-2xl bg-[#101c33]">
            <h3 className="text-[1.8vw] font-bold">
              Famous Places
            </h3>
            <p className="mt-[2vh] text-gray-300">
              Grand Palace Bangkok, Wat Arun Bangkok, Phuket Island, Phi Phi Islands, Chiang Mai Temples, Ayutthaya Historical Park, Krabi Beaches, Khao Sok National Park, Railay Beach, Maya Bay.
            </p>
          </div>


          <div className="p-[5%] rounded-2xl bg-[#101c33]">
            <h3 className="text-[1.8vw] font-bold">
              Culture
            </h3>
            <p className="mt-[2vh] text-gray-300">
              Experience Thailand’s vibrant culture through traditional festivals, temple ceremonies, Thai dance, arts, music, and delicious regional cuisines
            </p>
          </div>


          <div className="p-[5%] rounded-2xl bg-[#101c33]">
            <h3 className="text-[1.8vw] font-bold">
              Best Time To Visit
            </h3>
            <p className="mt-[2vh] text-gray-300">
              Best time to visit Thailand is from November to February, with cool weather, clear skies, and ideal conditions for beaches and sightseeing.
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
           src={thailand}
            alt="thailand"
            className="object-cover w-full h-full transition duration-700 group-hover:scale-110"
          />
          
        </div>
        <div className="relative overflow-hidden rounded-[2%] group w-[30%] h-[40vh] cursor-point m-5">
          <img
           src={historicalt}
            alt="historical"
            className="object-cover w-full h-full transition duration-700 group-hover:scale-110"
          />
        </div>
         <div className="relative overflow-hidden rounded-[2%] group w-[30%] h-[40vh] cursor-point m-5">
          <img
           src={palacet}
            alt="palacet"
            className="object-cover w-full h-full transition duration-700 group-hover:scale-110"
          />
        </div>
        </div>

        <div className="flex justify-between">
          <div className="relative overflow-hidden rounded-[2%] group w-[30%] h-[40vh] cursor-point m-5">
          <img
           src={phit}
            alt="phit"
            className="object-cover w-full h-full transition duration-700 group-hover:scale-110"
          />
          </div>
          <div className="relative overflow-hidden rounded-[2%] group w-[30%] h-[40vh] cursor-point m-5">
          <img
           src={phuket}
            alt="phuket"
            className="object-cover w-full h-full transition duration-700 group-hover:scale-110"
          />
          </div>
          <div className="relative overflow-hidden rounded-[2%] group w-[30%] h-[40vh] cursor-point m-5">
          <img
           src={historicalt}
            alt="historicalt"
            className="object-cover w-full h-full transition duration-700 group-hover:scale-110"
          />
          </div>
        </div>

      </div>
      </div>


    </div>
  );
};

export default Thailand;