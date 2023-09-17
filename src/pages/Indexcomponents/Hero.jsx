import React from "react";
import { Link } from "react-router-dom";
import map from "./heromap.png"

const Hero = () => {
  return (
    <div className="flex items-center text-center justify-center max-lg:flex-col">
      <div className="md:w-1/2"><h1 className="text-8xl mb-5 font-bold">Create Your custom Map</h1><p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque omnis ut suscipit quis natus explicabo non similique reiciendis, autem ipsa! Voluptate reiciendis explicabo asperiores alias molestias sed et, omnis nostrum?</p> <div className="flex items-center justify-center align-middle gap-4"><Link path={'/'} className="bg-black text-white text-3xl px-6 py-3 border-2 border-black  hover:bg-white hover:border-black hover:shadow-lg hover:text-pink-500 transition-all ease-in">🚀 Create</Link><p className=" text-2xl hover:scale-105 transition-all ease-in duration-75 text-gray-800 cursor-pointer">🎥 Watch To Create</p></div></div>
      <div className="md:1/2 flex justify-center max-md:my-3"><img src={map} alt="hero map" width={750} /></div>
    </div>
  );
};

export default Hero;
