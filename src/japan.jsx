import React from "react";
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
            <div
                    className="relative flex items-center justify-center w-full h-screen bg-cover"
                    style={{
                      backgroundImage: `linear-gradient(to bottom, rgba(8,17,31,0.2), rgba(8,17,31,1)), url(${japan})`
                    }}
                  >
                    <div className="text-center">
                      <h1 className="text-[6vw] font-extrabold">
                        Explore Japan
                      </h1>
            
                      <p className="w-[50%] mx-auto mt-[3vh] text-[1.3vw] text-gray-200">
                        Explore temples, cities, mountains, and unique Japanese experiences.
                      </p>
                    </div>
                  </div>
                  <div className="px-[8%] py-[10vh]">

        <h2 className="text-[4vw] font-bold text-[#79b8ff]">
          About Japan
        </h2>

        <p className="w-[80%] mt-[3vh] text-[1.2vw] text-gray-300">
          Japan is a beautiful island country in East Asia where ancient traditions blend seamlessly with modern technology. It is famous for its stunning cherry blossoms, historic temples, Mount Fuji, and vibrant cities like Tokyo and Kyoto. Visitors can enjoy delicious cuisine such as sushi and ramen, experience unique cultural traditions, and explore breathtaking natural landscapes. With its rich history, warm hospitality, and diverse attractions, Japan is a destination that offers unforgettable experiences for every traveler.

        </p>


        <div className="grid grid-cols-3 gap-[3%] mt-[8vh]">

          <div className="p-[5%] rounded-2xl bg-[#101c33]">
            <h3 className="text-[1.8vw] font-bold">
              Famous Places
            </h3>
            <p className="mt-[2vh]  text-gray-300">
              Tokyo, Kyoto, Mount Fuji, Osaka, Nara, Hiroshima, Hakone, Hokkaido, Miyajima Island, Arashiyama Bamboo Grove
            </p>
          </div>


          <div className="p-[5%] rounded-2xl bg-[#101c33]">
            <h3 className="text-[1.8vw] font-bold">
              Culture
            </h3>
            <p className="mt-[2vh] text-gray-300">
              Japan's culture is a unique blend of ancient traditions and modern innovation, known for its respect, discipline, and hospitality. It is famous for tea ceremonies, kimonos, festivals, anime, manga, and advanced technology.

            </p>
          </div>


          <div className="p-[5%] rounded-2xl bg-[#101c33]">
            <h3 className="text-[1.8vw] font-bold">
              Best Time To Visit
            </h3>
            <p className="mt-[2vh] text-gray-300">
              The best time to visit Japan is March to May (spring) for the beautiful cherry blossoms and September to November (autumn) for pleasant weather and colorful autumn leaves.

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
                 src={j}
                  alt="img"
                  className="object-cover w-full h-full transition duration-700 group-hover:scale-110"
                />
                
              </div>
              <div className="relative overflow-hidden rounded-[2%] group w-[30%] h-[40vh] cursor-point m-5">
                <img
                 src={p}
                  alt="img"
                  className="object-cover w-full h-full transition duration-700 group-hover:scale-110"
                />
              </div>
               <div className="relative overflow-hidden rounded-[2%] group w-[30%] h-[40vh] cursor-point m-5">
                <img
                 src={tokyo}
                  alt="img"
                  className="object-cover w-full h-full transition duration-700 group-hover:scale-110"
                />
              </div>
              </div>
      
              <div className="flex justify-between">
                <div className="relative overflow-hidden rounded-[2%] group w-[30%] h-[40vh] cursor-point m-5">
                <img
                 src={temp}
                  alt="img"
                  className="object-cover w-full h-full transition duration-700 group-hover:scale-110"
                />
                </div>
                <div className="relative overflow-hidden rounded-[2%] group w-[30%] h-[40vh] cursor-point m-5">
                <img
                 src={spring}
                  alt="img"
                  className="object-cover w-full h-full transition duration-700 group-hover:scale-110"
                />
                </div>
                <div className="relative overflow-hidden rounded-[2%] group w-[30%] h-[40vh] cursor-point m-5">
                <img
                 src={japanz}
                  alt="img"
                  className="object-cover w-full h-full transition duration-700 group-hover:scale-110"
                />
                </div>
              </div>
      
            </div>
            </div>
        </div>
     );
}
 
export default Japan;