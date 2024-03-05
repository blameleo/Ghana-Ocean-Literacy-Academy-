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
          Empowering Tomorrow’s Ocean Leaders Today
          </p>
          <p className="text-lg">
          Ghana boasts a breathtaking 560 km coastline along the Atlantic Ocean, a vital resource with multifaceted significance. Beyond its picturesque beauty, this coastal stretch plays a crucial role in fisheries, climate regulation, biodiversity promotion, and transportation. Despite its importance, there is a pressing need to raise awareness about safeguarding this invaluable resource, especially among the younger generation.
          </p>
        </div>
      </div>
      <div className="col-span-5 bg-[#172b46] grid place-items-center py-10 sm:py-0">
        <div className="text-center">
          <div className="flex justify-center">
            <IoWaterOutline size={40} className="text-pink-400" />
          </div>
          <h1 className="text-pink-600 font-black py-3 text-xl">
          Bridging the Educational Gap
          </h1>
          <p className="w-1/2 mx-auto text-pink-100 text-lg">
          Regrettably, the importance of our coastline is often overlooked in the education system. From preschool to senior high school, there is a conspicuous absence of ocean-related subjects. As a result, students graduate without fundamental knowledge of the ocean, its impact on daily life, and the imperative to protect it. This educational gap contributes to the ongoing abuse of our ocean and a lack of collective will, even among our leaders, to prioritize its conservation.
          </p>
        </div>
      </div>
      <div className="col-span-7 bg-[#0f1a30] grid place-items-center py-10 sm:py-0">
        <div className="text-center">
          <div className="flex justify-center">
            <GiWaterfall size={40} className="text-pink-400" />
          </div>
          <h1 className="text-pink-600 font-black py-3 text-xl">
          Empowering Future Stewards with FOLA
          </h1>
          <p className="w-1/2 mx-auto text-pink-100 text-lg">
          FOLA, which stands for Future Ocean Leaders Academy, is a pioneering ocean education and outreach initiative. Our mission is to inspire and empower the next generation of ocean enthusiasts, fostering informed decision-makers and advocates for marine environmental protection. Our year-long educational program targets children aged 6 to 14, bridging the gap in ocean literacy in both coastal and inland areas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
