import React from "react";
import { LiaInfoSolid } from "react-icons/lia";
import { MdOutlineGroups2, MdCastForEducation } from "react-icons/md";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { GiHamburger } from "react-icons/gi";
import { IoLogoTux } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { GiAquarium } from "react-icons/gi";

const Navbar = () => {
  const location = useLocation();
  const currentUrl = location.pathname;
  return (
    <nav className=" flex justify-between  py-3  shadow-xl px-5 bg-[#0c162c]  z-10 w-full">
      <div className="font-bold col-span-4  left-10 text-white top-10 ">
        <Link to="/">
          <GiAquarium size={50} />
        </Link>
      </div>

      <div className=" col-span-8 flex justify-end sm:justify-start">
        <ul className="md:flex    gap-20 hidden">
          <Link to="/about">
            <div
              className={`flex flex-col items-center cursor-pointer  hover:border-b-4 pb-2 transition duration-300 ease-in-out ${
                currentUrl === "/about"
                  ? "border-b-4 text-white border-pink-500"
                  : "text-white"
              }`}
            >
              <LiaInfoSolid size={25} />
              <p className="">About</p>
            </div>
          </Link>

          <Link to="/teams">
            <div
              className={`flex flex-col items-center cursor-pointer  hover:border-b-4 pb-2 transition duration-300 ease-in-out ${
                currentUrl === "/teams"
                  ? "border-b-4 text-white border-pink-500"
                  : "text-white"
              }`}
            >
              <MdOutlineGroups2 size={25} />
              <p className="">Teams</p>
            </div>
          </Link>

          <Link to="/educationhub">
            <div
              className={`flex flex-col items-center cursor-pointer  hover:border-b-4 pb-2 transition duration-300 ease-in-out ${
                currentUrl === "/educationhub"
                  ? "border-b-4 text-white border-pink-500"
                  : "text-white"
              }`}
            >
              <MdCastForEducation size={25} />
              <span className="">Education hub</span>
            </div>
          </Link>
          <Link to="/activities">
            <div
              className={`flex flex-col items-center cursor-pointer  hover:border-b-4 pb-2 transition duration-300 ease-in-out ${
                currentUrl === "/activities"
                  ? "border-b-4 border-pink-500 text-white"
                  : "text-white"
              }`}
            >
              <AiOutlineThunderbolt size={25} />
              <p className="">Activities</p>
            </div>
          </Link>
        </ul>

        <GiHamburger size={30} className="text-white md:hidden block " />
      </div>
    </nav>
  );
};

export default Navbar;
