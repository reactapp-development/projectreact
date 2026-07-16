import React from "react";
import {motion} from "framer-motion";
import mars from "./assets/mars.jpg";

const Home = () => {
  return (
<div>

    
    <div className="w-full h-screen bg-linear-to-br from-gray-600 via-blue-300 to-gray-950 text-black relative overflow-hidden">

      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: 'url("/src/assets/images1.jpg")',
        }}
      ></div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center"
      >


    <div className="text-5xl font-bold">
        <motion.h1
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
             duration: 1,
             ease: "easeOut"
             }}    
        >
            Building the Next Era of 
            </motion.h1>
        
        <motion.h1
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
             duration: 1,
             ease: "easeOut"
             
             }}  
             className="bg-linear-to-r from-green-950 to-blue-500 bg-clip-text text-transparent px-20 py-2"  
        >
            Space Exploration
            </motion.h1>  
    </div>


    <div className="w-150 m-10 text-center">
        <motion.h2
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
             duration: 1,
             ease: "easeOut"
             }}    
        >
            AstroLink is pioneering the infrastructure for a multi-planetary future. Our advanced starship network is designed to make the cosmos accessible for everyone
            </motion.h2>
    </div>

        
      </div>
</div>


      <div className="w-full h-screen 
      bg-linear-to-br from-gray-600 via-blue-300 to-gray-950 
      text-black">


      <div className="flex justify-between">
        <div className="pt-20 pl-20">
            <p>Next Orbit</p>
            <h1 className="text-5xl font-bold ">Featured Destinations</h1>
        </div>
        <div className="pt-36 pr-36 ">
            <h3>Explore high-resolution telemetry data from our furthest outposts and upcoming colonization sites.</h3>
        </div>
      </div>
      <div  className="pl-20 pt-10 ">
        <div className="relative">

        <img src={mars}
         alt="Mars"
         className="h-[56vh] object-cover rounded-2xl transition-transform duration-500 hover:scale-110 opacity-80"/>

         <div className="absolute bottom-6 left-6  text-white ">

          <h2 className="text-2xl font-bold">Mars: The Crimson Frontier</h2>
          <p className="w-100 pt-4 font-semibold">Witness the Olympus Mons at sunrise and explore the ancient riverbeds of the red planet.</p>

          </div>
         </div>
      </div>

      </div>
  </div>  
  );
};

export default Home;
