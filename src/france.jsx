import React from "react";
import france from "./assets/france.jpg";
const Japan = () => {
    return ( 
        <div className="min-h-screen bg-[#08111f] text-white">
            <div className="relative flex items-center justify-center w-full h-screen bg-cover"
                    style={{
                      backgroundImage: `linear-gradient(to bottom, rgba(8,17,31,0.2), rgba(8,17,31,1)), url(${france})`
                    }}
                  >
                    <div className="text-center">
                      <h1 className="text-[6vw] font-extrabold">
                        Visit France
                      </h1>
            
                      <p className="w-[50%] mx-auto mt-[3vh] text-[1.3vw] text-gray-200">
                        Explore temples, cities, mountains, and unique Japanese experiences.
                      </p>
                    </div>
                  </div>
                  <div className="px-[8%] py-[10vh]">

        <h2 className="text-[4vw] font-bold text-[#79b8ff]">
          About France
        </h2>

        <p className="w-[80%] mt-[3vh] text-[1.2vw] text-gray-300">

         France is a beautiful country in Western Europe, famous for its rich history, art, fashion, and world-renowned cuisine. It is home to iconic landmarks like the Eiffel Tower, the Louvre Museum, and the Palace of Versailles. From the romantic streets of Paris to the stunning French Riviera and picturesque countryside, France offers unforgettable experiences for every traveler. Its unique culture, delicious food, and beautiful landscapes make it one of the world's most popular tourist destinations.


        </p>


        <div className="grid grid-cols-3 gap-[3%] mt-[8vh]">

          <div className="p-[5%] rounded-2xl bg-[#101c33]">
            <h3 className="text-[1.8vw] font-bold">
              Famous Places
            </h3>
            <p className="mt-[2vh]  text-gray-300">
              Paris, Eiffel Tower, Louvre Museum, Palace of Versailles, Mont Saint-Michel, French Riviera (Côte d'Azur), Nice, Lyon, Bordeaux, Disneyland Paris
            </p>
          </div>


          <div className="p-[5%] rounded-2xl bg-[#101c33]">
            <h3 className="text-[1.8vw] font-bold">
              Culture
            </h3>
            <p className="mt-[2vh] text-gray-300">
              France's culture is known for its art, fashion, cuisine, literature, and rich history. It is famous for traditions like French cuisine, wine, festivals, museums, and a strong appreciation for creativity and elegance.


            </p>
          </div>


          <div className="p-[5%] rounded-2xl bg-[#101c33]">
            <h3 className="text-[1.8vw] font-bold">
              Best Time To Visit
            </h3>
            <p className="mt-[2vh] text-gray-300">
              The best time to visit France is April to June (spring) and September to October (autumn) when the weather is pleasant, crowds are smaller, and the landscapes are beautiful.

            </p>
          </div>

        </div>

      </div>
      <div>
        <div className="flex justify-center text-2xl font-extrabold">
            <h1>Famous Places Gallery</h1>
        </div>
      </div>
        </div>
     );
}
 
export default Japan;