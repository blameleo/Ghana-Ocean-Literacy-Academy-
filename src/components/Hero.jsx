import { Carousel } from "@material-tailwind/react";
import React from "react";
import backgroundImage from "../assets/backimage.png";

const Hero = () => {
  return (
    <div
      style={{ backgroundImage: "url(" + backgroundImage + ")" }}
      className="h-[90vh] object-cover bg-cover bg-center"
    >
      <div className="text-white sm:pt-64  px-4  pt-[110%]  w-[50%] relative">
        <div className="w-[40%] h-[10px] bg-pink-500 absolute right-[130px] top-[70%] -z-0 transform rotate-0"></div>
        <h1 className="text-white sm:text-8xl font-bold text-center  text-xl z-10 relative">
          Marine <span className="text-yellow-500">Engineering</span>
        </h1>
        <p className="text-center py-10 text-lg w-[50%] mx-auto">
          Dummy text can go here.Dummy text can go here Dummy text can go here
          Dummy text can go here
        </p>
      </div>
    </div>
  );
};

export default Hero;
