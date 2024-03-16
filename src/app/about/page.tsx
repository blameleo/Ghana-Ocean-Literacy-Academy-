"use client";

import Navbar from "@/components/ui/Navbar";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import React from "react";

function page() {
  const content = [
    {
      title: "Empowering Tomorrow’s Ocean Leaders Today",
      description:
        "Ghana boasts a breathtaking 560 km coastline along the Atlantic Ocean, a vital resource with multifaceted significance. Beyond its picturesque beauty, this coastal stretch plays a crucial role in fisheries, climate regulation, biodiversity promotion, and transportation. Despite its importance, there is a pressing need to raise awareness about safeguarding this invaluable resource, especially among the younger generation.",
      content: (
        <Image
          fill={true}
          className=""
          src="https://ghanamaritime.org/home/wp-content/uploads/2023/09/EAO-Vessel-scaled.jpg"
          alt=""
        />
      ),
    },
    {
      title: "Bridging the Educational Gap",
      description:
        "Regrettably, the importance of our coastline is often overlooked in the education system. From preschool to senior high school, there is a conspicuous absence of ocean-related subjects. As a result, students graduate without fundamental knowledge of the ocean, its impact on daily life, and the imperative to protect it. This educational gap contributes to the ongoing abuse of our ocean and a lack of collective will, even among our leaders, to prioritize its conservation.",
      content: (
        <Image
        fill={true}
        className=""
        src="https://oztrekk.com/wp-content/uploads/2021/04/Scuba.with_.Turtle.jpg"
        alt=""
      />
      ),
    },
    {
      title: "Empowering Future Stewards with FOLA",
      description:
        "FOLA, which stands for Future Ocean Leaders Academy, is a pioneering ocean education and outreach initiative. Our mission is to inspire and empower the next generation of ocean enthusiasts, fostering informed decision-makers and advocates for marine environmental protection. Our year-long educational program targets children aged 6 to 14, bridging the gap in ocean literacy in both coastal and inland areas.",
      content: (
        <Image
        fill={true}
        className=""
        src="https://marinebiology.uw.edu/wp-content/uploads/sites/31/2019/09/DSC05114-e1568238588524.jpg"
        alt=""
      />
      ),
    },
    {
      title: "",
      description: "",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          
        </div>
      ),
    },
  ];
  return (
    <div className=" bg-slate-950 ">
      <h1 className="sm:text-4xl text-2xl text-center font-bold text-pink-400">
            ABOUT US
          </h1>
      <StickyScroll content={content} />
    </div>
  );
}

export default page;
