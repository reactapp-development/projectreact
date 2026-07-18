import React from "react";
import india from "./assets/india.jpg"
import japan from "./assets/japan.jpg"
import france from "./assets/france.jpg"
import { Link } from "react-router-dom";
const destination = () => {
    return ( 
        <div className="bg-[#08111f] w-full min-h-screen">
        <div >
            <div className="text-center">
                <h1 className=" text-5xl py-10 font-bold hover:text-yellow-300">Explore Our Destinations</h1>
                <p className="w-[50%] mx-auto">Discover breathtaking places around the world, carefully selected to create unforgettable travel experiences. Each itinery is crafted with the precision of high end design.</p>
            </div>
            
            <div className="flex gap-8 mt-[8vh] pl-8 ">

          <Link to="/india" className="block w-[30%]">
          <div className="rounded-[2%] group h-[40vh] cursor-point">
            <img
              src={india}
              alt="India"
              className="object-cover w-full h-full transition duration-700 group-hover:scale-110 opacity-70 "
            />

            <div className=" bottom-0 left-0 w-full p-[5%]">
              <h2 className="text-lg font-semibold text-yellow-200 hover:text-blue-300">
                India
              </h2>
              <p>Explore the incredible beauty of India, where every state tells a different story</p>
            </div>
          </div>
          </Link>

          <Link to="/japan" className="block  w-[30%]">
          <div className="rounded-[2%] group h-[40vh] cursor-pointer">
            <img
              src={japan}
              alt="Japan"
              className="object-cover w-full h-full transition duration-700 group-hover:scale-110 opacity-70"
            />

            <div className=" bottom-0 left-0 w-full p-[5%]">
              <h2 className="text-lg font-semibold text-yellow-200 hover:text-blue-300">
                Japan
              </h2>
              <p>A beautiful blend of ancient traditions, modern technology, and stunning natural landscapes.</p>

            </div>
          </div>
          </Link>

          <Link to="/france" className="block w-[30%]">
          <div className="rounded-[2%] group h-[40vh]">
            <img
              src={france}
              alt="France"
              className="object-cover w-full h-full transition duration-700 group-hover:scale-110 opacity-70"
            />


            <div className=" bottom-0 left-0 w-full p-[5%]">
              <h2 className="text-lg font-semibold text-yellow-200 hover:text-blue-300">
                France
              </h2>
              <p>A charming destination known for art, history, cuisine, and iconic landmarks.</p>

            </div>
            
          </div>
          </Link>
        </div>
        </div>
        </div>
     );
}
 
export default destination;