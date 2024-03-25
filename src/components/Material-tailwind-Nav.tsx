//@ts-nocheck
"use client";
import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { LiaInfoSolid } from "react-icons/lia";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);
  const router = useRouter();

  function NavList() {
    const currentUrl = usePathname();
    return (
      <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-xl ">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
        >
          <p
            onClick={() => {
              router.push("/");
              setOpenNav(!openNav);
            }}
            className={`flex items-center justify-center hover:text-yellow-500 transition-colors ${
              currentUrl === "/"
                ? "border-b-4 text-white border-teal-500"
                : "text-white"
            }`}
          >
            Home
          </p>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
        >
          <p
            onClick={() => {
              router.push("/about");
              setOpenNav(!openNav);
            }}
            className={`flex items-center justify-center hover:text-yellow-500 transition-colors ${
              currentUrl === "/about"
                ? "border-b-4 text-white border-teal-500"
                : "text-white"
            }`}
          >
            About
          </p>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
        >
          <p
            onClick={() => {
              router.push("/teams");
              setOpenNav(!openNav);
            }}
            className={`flex items-center justify-center hover:text-yellow-500 transition-colors ${
              currentUrl === "/teams"
                ? "border-b-4 text-white border-teal-500"
                : "text-white"
            }`}
          >
            Teams
          </p>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
        >
          <p
            onClick={() => {
              router.push("/educationhub");
              setOpenNav(!openNav);
            }}
            className={`flex items-center justify-center hover:text-yellow-500 transition-colors ${
              currentUrl === "/educationhub"
                ? "border-b-4 text-white border-teal-500"
                : "text-white"
            }`}
          >
            Education Hub
          </p>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
        >
          <p
            onClick={() => {
              router.push("/activities");
              setOpenNav(!openNav);
            }}
            className={`flex items-center justify-center hover:text-yellow-500 transition-colors ${
              currentUrl === "/activities"
                ? "border-b-4 text-white border-teal-500"
                : "text-white"
            }`}
          >
            Activities
          </p>
        </Typography>
      </ul>
    );
  }

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-xl border-none rounded-none px-6 py-3 bg-slate-950 ">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
        >
          <img src="/FOLA4.png" className="w-14 sm:w-20 full" alt="" />{" "}
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
