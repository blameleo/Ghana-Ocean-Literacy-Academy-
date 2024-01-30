import { Carousel } from "@material-tailwind/react";
import React from "react";
import backgroundImage from "../assets/backimage.png";

const Hero = () => {
  return (
    // <Carousel className="border border-red-500">
    //   <img
    //     src={backgroundImage}
    //     alt="image 3"
    //     className="h-full w-full object-cover"
    //   />
    // </Carousel>
    <div
      style={{ backgroundImage: "url(" + backgroundImage + ")" }}
      className="  h-screen object-cover bg-cover bg-center"
    >
      <div className="text-white sm:pt-64  px-4  pt-[110%]">
        <h1 className="text-white sm:text-7xl font-bold text-center sm:text-left text-xl">
          Marine Engineering
        </h1>
        <p className="sm:w-1/3 text-lg py-2 mx-auto sm:mx-0  pt-5  ">
          Dummy text can go here
        </p>
      </div>
    </div>
  );
};

export default Hero;
