import React from "react";
import india from "./assets/india.jpg";

const India = () => {
  return (
    <div className="min-h-screen bg-[#08111f] text-white">

      <div
        className="relative flex items-center justify-center w-full h-screen bg-cover"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(8,17,31,0.2), rgba(8,17,31,1)), url(${india})`
        }}
      >
        <div className="text-center">
          <h1 className="text-[6vw] font-extrabold">
            Explore India
          </h1>

          <p className="w-[50%] mx-auto mt-[3vh] text-[1.3vw] text-gray-200">
            Discover the land of diverse cultures, ancient history,
            breathtaking landscapes, and unforgettable experiences.
          </p>
        </div>
      </div>


      <div className="px-[8%] py-[10vh]">

        <h2 className="text-[4vw] font-bold text-[#79b8ff]">
          About India
        </h2>

        <p className="w-[80%] mt-[3vh] text-[1.2vw] text-gray-300">
          India is a country of incredible diversity, where ancient traditions
          meet modern cities. From the snow-covered Himalayas to tropical
          beaches, India offers a journey through history, nature, spirituality,
          and culture.
        </p>


        <div className="grid grid-cols-3 gap-[3%] mt-[8vh]">

          <div className="p-[5%] rounded-2xl bg-[#101c33]">
            <h3 className="text-[1.8vw] font-bold">
              Famous Places
            </h3>
            <p className="mt-[2vh] text-gray-300">
              Taj Mahal, Jaipur, Kerala backwaters, Goa beaches, and the
              Himalayan mountains.
            </p>
          </div>


          <div className="p-[5%] rounded-2xl bg-[#101c33]">
            <h3 className="text-[1.8vw] font-bold">
              Culture
            </h3>
            <p className="mt-[2vh] text-gray-300">
              Experience festivals, traditional art, music, dance, and
              delicious regional cuisines.
            </p>
          </div>


          <div className="p-[5%] rounded-2xl bg-[#101c33]">
            <h3 className="text-[1.8vw] font-bold">
              Best Time To Visit
            </h3>
            <p className="mt-[2vh] text-gray-300">
              October to March is ideal for exploring most destinations with
              pleasant weather.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default India;