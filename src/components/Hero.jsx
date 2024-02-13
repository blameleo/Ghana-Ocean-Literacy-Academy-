import { Carousel } from "@material-tailwind/react";
import React from "react";
import backgroundImage from "../assets/backimage.png";

const Hero = () => {
  return (
    <div
      style={{ backgroundImage: "url(" + backgroundImage + ")" }}
      className="h-[90vh] object-cover bg-cover bg-center flex sm:items-center items-end"
    >
      <div className="text-white   px-4  ml-0 sm:ml-20    relative  pt-[50px] ">
        <div className="w-[200px] h-[10px] bg-pink-500 absolute right-[130px] sm:top-[110px] top-[180px] -z-0 transform rotate-0  sm:block"></div>
        <h1 className="text-white  font-bold    z-10 text-7xl relative ">
        Future Ocean <span className="text-yellow-500">Leaders Academy</span>
        </h1>
        <p className="text-center py-10 text-lg">
        To inspire and empower the next generation of ocean enthusiasts to become
        <p> informed decision-makers and advocates for marine environmental protection.</p>
       
        </p>
        <p className="text-center py-10 text-lg">
        Empowering Tomorrow’s Ocean Leaders Today.
        </p>
      </div>
    </div>
  );
};

export default Hero;
