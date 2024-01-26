import React from "react";
import { LiaInfoSolid } from "react-icons/lia";
import { MdOutlineGroups2, MdCastForEducation } from "react-icons/md";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { GiHamburger } from "react-icons/gi";
import { IoLogoTux } from "react-icons/io";


const Navbar = () => {
  return (
    <nav className=" grid grid-cols-12 items-center  py-5   backdrop-blur-lg bg-teal-500/20  shadow-lg px-5 fixed z-10 w-full">
      <div className="font-bold col-span-4  left-10 text-white top-10 ">
        {/* <IoLogoTux size={40} className="text-amber-400"/> */}
        logo comes here
      </div>

      <div className=" col-span-8 flex justify-end sm:justify-start">
        <ul className="md:flex    gap-20 hidden">
          <div className="flex flex-col items-center cursor-pointer text-white hover:text-rose-400 hover:border-b-4 pb-2 transition duration-300 ease-in-out">
            <LiaInfoSolid size={35} />
            <p className="font-black">About</p>
          </div>
          <div className="flex flex-col items-center cursor-pointer text-white hover:text-rose-400 hover:border-b-4 pb-2 transition duration-300 ease-in-out">
            <MdOutlineGroups2 size={35} />
            <p className="font-black">Teams</p>
          </div>
          <div className="flex flex-col items-center cursor-pointer text-white hover:text-rose-400 hover:border-b-4 pb-2 transition duration-300 ease-in-out">
            <MdCastForEducation size={33} />
            <span className="font-black">Education hub</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer text-white hover:text-rose-400 hover:border-b-4 pb-2 transition duration-300 ease-in-out">
            <AiOutlineThunderbolt size={30} />
            <p className="font-black">Activities</p>
          </div>
        </ul>

        <GiHamburger size={30} className="text-white md:hidden block " />
      </div>
    </nav>
  );
};

export default Navbar;
