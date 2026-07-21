import React from "react";
import korea from "./assets/korea.jpg";
import jeju from "./assets/jeju.jpg";
import park from "./assets/park.jpg";
import village from "./assets/village.jpg";
import tower from "./assets/tower.jpg";
import beach from "./assets/beach.jpg";


const Korea = () => {
  return (
    <div className="min-h-screen bg-[#08111f] text-white">

      <div
        className="relative flex items-center justify-center w-full h-screen bg-cover"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(8,17,31,0.2), rgba(8,17,31,1)), url(${korea})`
        }}
      >
        <div className="text-center">
          <h1 className="text-[6vw] font-extrabold">
            Explore Korea
          </h1>

          <p className="w-[50%] mx-auto mt-[3vh] text-[1.3vw] text-gray-200">
            A land where ancient traditions meet modern innovation, from historic palaces to futuristic cities.
            Explore its vibrant culture, delicious cuisine, beautiful landscapes, and global influences like K-pop and technology.
          </p>
        </div>
      </div>


      <div className="px-[8%] py-[10vh]">

        <h2 className="text-[4vw] font-bold text-[#79b8ff]">
          About Korea
        </h2>

        <p className="w-[80%] mt-[3vh] text-[1.2vw] text-gray-300">
          Korea is a country in East Asia, known for its rich history, technology, traditional culture, and famous foods like kimchi. 
          It is divided into South Korea and North Korea, with South Korea being famous for K-pop, electronics, and modern cities like Seoul.

        </p>


        <div className="grid grid-cols-3 gap-[3%] mt-[8vh]">

          <div className="p-[5%] rounded-2xl bg-[#101c33]">
            <h3 className="text-[1.8vw] font-bold">
              Famous Places
            </h3>
            <p className="mt-[2vh] text-gray-300">
              Gyeongbokgung Palace, Jeju Island, N Seoul Tower, Bukchon Hanok Village, Changdeokgung Palace, Haeundae Beach, Bulguksa Temple, Nami Island, Seoraksan National Park, Lotte World Tower. </p>
          </div>


          <div className="p-[5%] rounded-2xl bg-[#101c33]">
            <h3 className="text-[1.8vw] font-bold">
              Culture
            </h3>
            <p className="mt-[2vh] text-gray-300">
              Experience Korea's vibrant festivals, traditional arts, K-pop music, graceful dances, and diverse regional cuisines.

            </p>
          </div>


          <div className="p-[5%] rounded-2xl bg-[#101c33]">
            <h3 className="text-[1.8vw] font-bold">
              Best Time To Visit
            </h3>
            <p className="mt-[2vh] text-gray-300">
              Best time to visit Korea is during spring April-May and autumn September-November, when the weather is pleasant and the landscapes are filled with cherry blossoms or colorful autumn foliage.

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
           src={korea}
            alt="Korea"
            className="object-cover w-full h-full transition duration-700 group-hover:scale-110"
          />
          
        </div>
        <div className="relative overflow-hidden rounded-[2%] group w-[30%] h-[40vh] cursor-point m-5">
          <img
           src={jeju}
            alt="jeju"
            className="object-cover w-full h-full transition duration-700 group-hover:scale-110"
          />
        </div>
         <div className="relative overflow-hidden rounded-[2%] group w-[30%] h-[40vh] cursor-point m-5">
          <img
           src={village}
            alt="village"
            className="object-cover w-full h-full transition duration-700 group-hover:scale-110"
          />
        </div>
        </div>

        <div className="flex justify-between">
          <div className="relative overflow-hidden rounded-[2%] group w-[30%] h-[40vh] cursor-point m-5">
          <img
           src={tower}
            alt="tower"
            className="object-cover w-full h-full transition duration-700 group-hover:scale-110"
          />
          </div>
          <div className="relative overflow-hidden rounded-[2%] group w-[30%] h-[40vh] cursor-point m-5">
          <img
           src={park}
            alt="park"
            className="object-cover w-full h-full transition duration-700 group-hover:scale-110"
          />
          </div>
          <div className="relative overflow-hidden rounded-[2%] group w-[30%] h-[40vh] cursor-point m-5">
          <img
           src={beach}
            alt="beach"
            className="object-cover w-full h-full transition duration-700 group-hover:scale-110"
          />
          </div>
        </div>

      </div>
      </div>


    </div>
  );
};

export default Korea;