import React from "react";
import aboutimageone from "../assets/aboutimage.jpg";
import { IoWaterOutline } from "react-icons/io5";
import { GiWaterfall } from "react-icons/gi";

const About = () => {
  return (
    <div className="sm:grid grid-cols-12 h-[90dvh] ">
      <div
        style={{ backgroundImage: "url(" + aboutimageone + ")" }}
        className="col-span-3  bg-cover"
      ></div>
      <div className="col-span-9  grid place-items-center bg-[#f0e1c9] py-10 sm:py-0">
        <div className="sm:w-1/2 text-center ">
          <h1 className="sm:text-7xl text-4xl font-bold text-pink-400">
            ABOUT US
          </h1>

          <p className="text-[#616974] font-semibold py-5 text-lg">
            lorem ipsum dilor
          </p>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            odit, ipsam, alias voluptates similique suscipit voluptas dolores
            nulla porro possimus tenetur libero asperiores quod. Voluptate
            veniam soluta veritatis officia placeat!
          </p>
        </div>
      </div>
      <div className="col-span-5 bg-[#172b46] grid place-items-center py-10 sm:py-0">
        <div className="text-center">
          <div className="flex justify-center">
            <IoWaterOutline size={40} className="text-pink-400" />
          </div>
          <h1 className="text-pink-600 font-black py-3 text-xl">
            Learn marine science
          </h1>
          <p className="w-1/2 mx-auto text-pink-100 text-lg">
            Learn with no restrictions a wide range of producsts are now one
            click away
          </p>
        </div>
      </div>
      <div className="col-span-7 bg-[#0f1a30] grid place-items-center py-10 sm:py-0">
        <div className="text-center">
          <div className="flex justify-center">
            <GiWaterfall size={40} className="text-pink-400" />
          </div>
          <h1 className="text-pink-600 font-black py-3 text-xl">
            Learn marine science
          </h1>
          <p className="w-1/2 mx-auto text-pink-100 text-lg">
            Learn with no restrictions a wide range of producsts are now one
            click away
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
