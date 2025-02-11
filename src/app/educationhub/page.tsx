//@ts-nocheck
"use client";
import React, { useState } from "react";
import { FaDownload } from "react-icons/fa6";
import { IoEyeSharp } from "react-icons/io5";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from "next/image";

function Page() {
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = React.useState(false);
  const [currentPdf, setCurrentPdf] = useState("");

  const handleOpen = (param) => {
    setCurrentPdf(param);
    setOpen(!open);
  };

  const handleDownload = (link, title) => {
    // Construct a temporary anchor element
    const anchor = document.createElement("a");
    anchor.href = link;
    anchor.download = `${title}.pdf`; // Set the filename for the downloaded file

    // Trigger a click event on the anchor element
    document.body.appendChild(anchor);
    anchor.click();

    // Clean up
    document.body.removeChild(anchor);
  };

  const pdfs = [
    {
      image:
        "/fola4.png",
      title: "marine science 101",
      link: "https://drive.google.com/file/d/1fhendJ3n05yTyUZ6mwK0e45niSwLhDwg/preview",
      download:
        "https://drive.google.com/uc?export=download&id=1fhendJ3n05yTyUZ6mwK0e45niSwLhDwg",
    },
    {
      image:
        "/fola4.png",
      title: "a tale about life",
      link: "https://drive.google.com/file/d/1K7zwtkYF2H59JDs9B2s5t8hxIbl-G_qb/preview",
      download: "",
    },
    {
      image:
        "/fola4.png",
      title: "two young trolls",
      link: "https://drive.google.com/file/d/1fhendJ3n05yTyUZ6mwK0e45niSwLhDwg/preview",
      download: "",
    },
    {
      image:
        "/fola4.png",
      title: "playground menace",
      link: "https://drive.google.com/file/d/1K7zwtkYF2H59JDs9B2s5t8hxIbl-G_qb/preview",
      download: "",
    },
    {
      image:
        "/fola4.png",
      title: "javascript is a blast",
      link: "https://drive.google.com/file/d/1fhendJ3n05yTyUZ6mwK0e45niSwLhDwg/preview",
      download: "",
    },
  ];

  const renderPdfs = () => {
    const filteredPdfs = pdfs.filter((pdf) =>
      pdf.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filteredPdfs.map((pdf, index) => {
      return (
        <div
          key={index}
          className="p-5 mb-10 border border-violet-500 rounded-lg "
        >
          <Image
            src={pdf.image}
            alt="jordans"
            height="400"
            width="400"
            className="object-contain bg-white rounded-lg p-5"
          />
          <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            {pdf.title}
          </p>

          <div className="flex text-white justify-between pt-2 ">
            <button
              onClick={() => handleDownload(pdf.download, pdf.title)}
              className="flex gap-2 items-center px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              <FaDownload />
              Download
            </button>
            <button
              onClick={() => handleOpen(pdf.link)}
              className="flex gap-2 items-center px-4 py-2 rounded-xl bg-black dark:bg-pink-900 dark:text-white text-white text-xs font-bold"
            >
              <IoEyeSharp />
              View
            </button>
          </div>
        </div>
      );
    });
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div className="bg-slate-950 pb-20">
      <h1 className="text-center text-white text-5xl ">
        {" "}
        <span className="text-yellow-500 underline">PDF</span> hub
      </h1>
      <div className="bg-gradient-to-bl from-slate-950  via-slate-950 to-blue-500 py-10 relative">
        <form className=" w-[50%] mx-auto ">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block border-4 w-full p-4 ps-10 outline-none text-sm text-black  border-gray-100 rounded-lg bg-gray-300  dark:bg-gray-700 dark:border-gray-600 placeholder-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search pdfs"
              value={searchTerm}
              onChange={handleSearch}
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-pink-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      <div className="  grid sm:grid-cols-3 gap-5 p-5 lg:grid-cols-4">
        {renderPdfs()}
      </div>
      <Dialog
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
        open={open}
        handler={handleOpen}
      >
        <div>
          {" "}
          <iframe
            src={currentPdf}
            width="100%"
            height="700px"
            title="PDF Viewer"
          ></iframe>
        </div>
      </Dialog>
    </div>
  );
}

export default Page;
