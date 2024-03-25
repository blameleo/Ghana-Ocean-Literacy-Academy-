"use client";
import React, { useState } from "react";
import { LiaInfoCircleSolid, LiaInfoSolid } from "react-icons/lia";
import { MdOutlineGroups2, MdCastForEducation } from "react-icons/md";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { GiHamburger } from "react-icons/gi";
import { GiAquarium } from "react-icons/gi";
import { IoIosCloseCircle } from "react-icons/io";
import Link from "next/link";
import { usePathname } from 'next/navigation'


const Navbar = () => {
  const [openMobileMenu, setMobileMenu] = useState(false);

  const currentUrl = usePathname();

  const closeMobileMenu = () => {
    setMobileMenu(false);
  };
  return (
    <div>
      <nav className=" flex justify-between items-center text-xl bg-slate-950   px-5  min-h-[10vh] relative z-20">
        <div className="  text-white  ">
          <Link href="/">
            <img src="/FOLA2.jpg" className="w-8 sm:w-12 rounded-full" alt=''/>{" "}
          </Link>
        </div>

        <div className=" col-span-8 flex justify-end sm:justify-start">
          <ul className="md:flex   items-center gap-16 hidden">
            {/* <Link href="/about">
              <div
                className={`flex flex-col items-center cursor-pointer  hover:border-b-4 pb-2 transition duration-300 ease-in-out ${
                  currentUrl === "/about"
                    ? "border-b-4 text-white border-yellow-500"
                    : "text-white"
                }`}
              >
                <LiaInfoCircleSolid size={25} />
                <p className="">About</p>
              </div>
            </Link> */}

            <Link href="/teams">
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

            <Link href="/educationhub">
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
            <Link href="/activities">
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
        
      </nav>
      {/* mobile menu */}
      {/* <div
        className={`transition-transform duration-300 ease-in-out ${
          openMobileMenu ? "translate-y-16" : "-translate-y-full"
        } absolute top-0 left-0 w-full z-40`}
      >
        <ul className="grid bg-slate-950 text-white text-center text-xl">
          <Link
            href="/"
            className="py-1 hover:bg-pink-500 w-[100%]"
            onClick={closeMobileMenu}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="py-1 hover:bg-pink-500 w-[100%]"
            onClick={closeMobileMenu}
          >
            About
          </Link>
          <Link
            href="/teams"
            className="py-1 hover:bg-pink-500 w-[100%]"
            onClick={closeMobileMenu}
          >
            Teams
          </Link>
          <Link
            href="/educationhub"
            className="py-1 hover:bg-pink-500 w-[100%]"
            onClick={closeMobileMenu}
          >
            Education hub
          </Link>
          <Link
            href="/activities"
            className="py-1 hover:bg-pink-500 w-[100%]"
            onClick={closeMobileMenu}
          >
            Activities
          </Link>
        </ul>
      </div> */}
    </div>
  );
};

export default Navbar;
