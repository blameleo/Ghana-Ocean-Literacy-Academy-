"use client";

import Navbar from "@/components/ui/Navbar";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

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
          src="/about1.jpg"
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
          src="/about2.jpg"
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
          src="/about3.jpg"
          alt=""
        />
      ),
    },
  ];

  const dummyContent = [
    {
      title: "Empowering Tomorrow’s Ocean Leaders Today",
      description: (
        <>
          <p>
            Ghana boasts a breathtaking 560 km coastline along the Atlantic
            Ocean, a vital resource with multifaceted significance. Beyond its
            picturesque beauty, this coastal stretch plays a crucial role in
            fisheries, climate regulation, biodiversity promotion, and
            transportation. 
          </p>
          <br />
          <p>Despite its importance, there is a pressing need to
            raise awareness about safeguarding this invaluable resource,
            especially among the younger generation.</p>
        </>
      ),
      badge: "",
      image:
        "/about1.jpg",
    },
    {
      title: "Bridging the Educational Gap",
      description: (
        <>
          <p>
            Regrettably, the importance of our coastline is often overlooked in
            the education system. From preschool to senior high school, there is
            a conspicuous absence of ocean-related subjects. As a result,
            students graduate without fundamental knowledge of the ocean, its
            impact on daily life, and the imperative to protect it. 
          </p>
          <br />
          <p>
          This
            educational gap contributes to the ongoing abuse of our ocean and a
            lack of collective will, even among our leaders, to prioritize its
            conservation.
          </p>
        </>
      ),
      badge: "",
      image:
        "/about2.jpg",
    },
    {
      title: "Empowering Future Stewards with FOLA",
      description: (
        <>
          <p>
            FOLA, which stands for Future Ocean Leaders Academy, is a pioneering
            ocean education and outreach initiative. Our mission is to inspire
            and empower the next generation of ocean enthusiasts, fostering
            informed decision-makers and advocates for marine environmental
            protection. 
          </p>
          <br />

          <p>
          Our year-long educational program targets children aged
            6 to 14, bridging the gap in ocean literacy in both coastal and
            inland areas.
          </p>
        </>
      ),
      badge: "",
      image:
        "/about3.jpg",
    },
  ];
  return (
    <div className=" bg-slate-950">
      <h1 className="sm:text-4xl text-2xl text-center font-bold text-pink-400">
        ABOUT US
      </h1>
      <div className="hidden sm:block">
        <StickyScroll content={content} />
      </div>
      <TracingBeam className="px-6 block sm:hidden h-screen ">
        <div className="w-full  antialiased pt-4 relative  bg-slate-950 ">
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10  ">
              {item.badge && (
                <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                  {item.badge}
                </h2>
              )}

              <p className={twMerge("text-xl mb-4 text-white")}>{item.title}</p>
              <div className="text-sm text-white ">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>

              {/* <div className="text-sm  prose prose-sm prose-invert">
                {item?.image && (
                  <Image
                    src={item.image}
                    alt="blog thumbnail"
                    height="1000"
                    width="1000"
                    className="rounded-lg mb-10 object-cover"
                  />
                )}
                {item.description}
              </div> */}
            </div>
          ))}
        </div>
      </TracingBeam>{" "}
    </div>
  );
}

export default page;
