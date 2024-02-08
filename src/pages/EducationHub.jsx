import React, { useState } from "react";
import { FaDownload } from "react-icons/fa6";
import { IoEyeSharp } from "react-icons/io5";
const EducationHub = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const pdfs = [
    {
      image:
        "https://media.kasperskydaily.com/wp-content/uploads/sites/92/2020/02/28163447/36C3-PDF-encryption-featured2.jpg",
      title: "marine science 101",
      link: "https://drive.google.com/file/d/1fhendJ3n05yTyUZ6mwK0e45niSwLhDwg/view?usp=drive_link",
    },
    {
      image:
        "https://media.kasperskydaily.com/wp-content/uploads/sites/92/2020/02/28163447/36C3-PDF-encryption-featured2.jpg",
      title: "a tale about life",
      link: "",
    },
    {
      image:
        "https://media.kasperskydaily.com/wp-content/uploads/sites/92/2020/02/28163447/36C3-PDF-encryption-featured2.jpg",
      title: "two young trolls",
      link: "",
    },
    {
      image:
        "https://media.kasperskydaily.com/wp-content/uploads/sites/92/2020/02/28163447/36C3-PDF-encryption-featured2.jpg",
      title: "playground menace",
      link: "",
    },
    {
      image:
        "https://media.kasperskydaily.com/wp-content/uploads/sites/92/2020/02/28163447/36C3-PDF-encryption-featured2.jpg",
      title: "javascript is a blast",
      link: "",
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
          className=" rounded bg-gray-100 h-[300px] p-5 hover:scale-105 transition duration-700"
        >
          <div className="">
            <img
              src={pdf.image}
              alt=""
              className="object-cover h-48 w-96 rounded"
            />
          </div>
          <h1 className="text-center text-xl">{pdf.title}</h1>

          <div className="flex text-white justify-around pt-2 gap-10">
            <button className="flex items-center justify-around  rounded w-28 bg-[#0c162c] py-2 hover:bg-green-800">
              <FaDownload /> Download
            </button>
            <button className="flex items-center justify-around  rounded w-28 bg-pink-900 hover:bg-blue-800">
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
    <div className="h-screen bg-[#0c162c]">
      <h1 className="text-center text-white text-5xl pt-5">
        {" "}
        <span className="text-pink-500 underline">PDF</span> hub
      </h1>
      <div className="bg-gradient-to-bl from-[#0c162c]  via-[#0c162c] to-pink-500 py-10 relative">
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
              className="block w-full p-4 ps-10 outline-none text-sm text-black  border-gray-300 rounded-lg bg-gray-300  dark:bg-gray-700 dark:border-gray-600 placeholder-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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

      <div className="  grid sm:grid-cols-2 lg:grid-cols-4 gap-20 p-10 bg-[#0c162c]">
        {renderPdfs()}
      </div>
    </div>
  );
};

export default EducationHub;
