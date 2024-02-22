import React, { useState } from "react";
import { LiaInfoSolid } from "react-icons/lia";
import { MdOutlineGroups2, MdCastForEducation } from "react-icons/md";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { GiHamburger } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";
import { GiAquarium } from "react-icons/gi";
import { IoIosCloseCircle } from "react-icons/io";
import logo from "../assets/FOLA2.jpg"


const Navbar = () => {
  const [openMobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();
  const currentUrl = location.pathname;

  const closeMobileMenu = () => {
    setMobileMenu(false);
  };
  return (
    <div>
      <nav className=" flex justify-between items-center text-xl   shadow-xl px-5 bg-[#0c162c] h-[10vh]">
        <div className="  text-white">
          <Link to="/">
            <img src={logo} alt="logo" width={60} className="rounded-full"/>
          </Link>
        </div>

        <div className=" col-span-8 flex justify-end sm:justify-start">
          <ul className="md:flex   items-center gap-16 hidden">
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

          {openMobileMenu ? (
            <IoIosCloseCircle
              className="text-white md:hidden block cursor-pointer"
              size={30}
              onClick={() => setMobileMenu(false)}
            />
          ) : (
            <GiHamburger
              onClick={() => setMobileMenu(true)}
              size={30}
              className="text-white md:hidden block cursor-pointer"
            />
          )}
        </div>
        <Link to="/login" className="hidden">
          <button className=" cursor-pointer  hover:border-b-4  transition duration-300 ease-in-out text-white  p-3 rounded bg-pink-400">
            Log in{" "}
          </button>
        </Link>
      </nav>

      <div
        className={`transition-transform duration-300 ease-in-out ${
          openMobileMenu ? "translate-y-16" : "-translate-y-full"
        } absolute top-0 left-0 w-full z-20`}
      >
        <ul className="grid bg-[#2b3c62] text-white text-center text-xl">
          <Link
            to="/"
            className="py-1 hover:bg-pink-500 w-[100%]"
            onClick={closeMobileMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="py-1 hover:bg-pink-500 w-[100%]"
            onClick={closeMobileMenu}
          >
            About
          </Link>
          <Link
            to="/teams"
            className="py-1 hover:bg-pink-500 w-[100%]"
            onClick={closeMobileMenu}
          >
            Teams
          </Link>
          <Link
            to="/educationhub"
            className="py-1 hover:bg-pink-500 w-[100%]"
            onClick={closeMobileMenu}
          >
            Education hub
          </Link>
          <Link
            to="/activities"
            className="py-1 hover:bg-pink-500 w-[100%]"
            onClick={closeMobileMenu}
          >
            Activities
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
