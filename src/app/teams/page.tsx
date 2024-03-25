//@ts-nocheck
"use client";
import { TracingBeam } from "@/components/ui/tracing-beam";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import Navbar from "@/components/ui/Navbar";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { BackgroundGradient } from "@/components/ui/background-gradient";
function Page() {
  // State to track expanded descriptions
  const [expanded, setExpanded] = useState({});

  // Function to toggle description expansion
  const toggleDescription = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  const teams = [
    {
      title: "Director",
      description: ` Dr. Edem Mahu is not your ordinary scientist - she's on a mission to uncover the secrets of the sea and inspire the next generation of marine scientists! As the Director of our organization, she brings her expertise in Marine Biogeochemistry to the table, along with her boundless enthusiasm for all things ocean-related.

      With a background in paleoclimatic and environmental reconstructions, Dr. Edem Mahu is always diving deep into research about marine ecosystems. From studying marine pollution to exploring nature-based solutions for coastal challenges, she's at the forefront of protecting our precious oceans.
      
      Dr. Edem Mahu is not just a scientist; she's also a leader in the field of marine conservation. She heads up exciting projects like "Oyster Reef Restoration and Conservation for Livelihood and Ecosystem Protection" and "Mangroves as nature-based solutions to coastal hazards". Her work has earned her recognition from prestigious organizations like the Royal Society and the African Academy of Sciences.
      
      But Dr. Edem Mahu's passion doesn't stop there - she's dedicated to sharing her love for the ocean with kids everywhere! From mentoring budding marine scientists to leading educational programs like the National Geographic STEM Field Assistant Program, she's making waves in inspiring the next generation to care for our oceans.
      
      Join Dr. Edem Mahu on an adventure beneath the waves and discover the wonders of the sea with us!`,
      badge: "Dr. Edem Mahu",
      image: "/DR-MAHU.jpg",
    },
    {
      title: "Programme Manager",
      description: `Kingsley is the passionate navigator at the helm of FOLA - the Future Ocean Leaders Academy. Currently pursuing an MPhil, he serves as the dedicated Program Manager, steering FOLA towards success. Although still navigating the academic seas, Kingsley is setting sail with a mission. His expertise in Marine Pollution, coupled with experience as a Search and Rescue Officer and Director of Programs at a children's well-being NGO, makes him the perfect captain for FOLA. In his role, Kingsley ensures a smooth voyage for FOLA, coordinating with all teams to make our oceanic adventures a hit. His principle is simple yet powerful:(Get things done) and his greatest joy comes from putting smiles on the faces of children. Join Kingsley and the FOLA crew on this fantastic oceanic journey, where learning is fun, and adventures never end. `,
      badge: "Kingsley Kojo Darko Abaye",
      image: "/king123.jpg",
    },
    {
      title: "Assistant Programme Manager",
      description: ` Gabriella Akpah Yeboah, our Assistant Programme Manager, is a dedicated explorer of the ocean's mysteries. Currently pursuing her PhD at the University of Ghana, Gabriella specializes in sclerochronology, unraveling the secrets of the past to understand environmental changes and historical trends in population and climate. Additionaly, she is actively involved in the Mahu Biogeochemistry Working Group, contributing to research in this field. Her expertise isn't confined to one area - she's also a champion against marine plastic pollution, a wizard in remote sensing, an aspiring software engineer and an enthusiast in mycology. As our Assistant Programme Manager and Alumni Relations Specialist, Gabriella takes the lead in connecting with our programme graduates. She ensures a strong bond with our alumni community, fostering ongoing engagement and collaboration.`,
      badge: "Gabriella Akpah Yeboah",
      image: "/Gabs lk-2.jpg",
    },
    {
      title: "Communications Co-Lead",
      description: ` Tyronne, a passionate ocean enthusiast, seamlessly combines his Marine Science expertise with a tech-savvy approach, creating a unique blend for exploring the underwater realm. Equipped with insights from academic pursuits, he is dedicated to ocean conservation and actively raises awareness. Beyond textbooks, Tyronne's deep connection with the ocean translates into inspiring photography, narrating powerful stories and emphasizing the importance of preserving its captivating beauty. In Tyronne's world, passion and purpose converge as he strives to instill appreciation for the ocean and drive positive change. Join him on this immersive journey, where each snapshot tells a tale of the ocean's enchantment and the need for its preservation.`,
      badge: "Tyronne Jude Vanderpuye-Orgle",
      image: "/Tyronne.jpg",
    },
    {
      title: "Communications Co-Lead",
      description: ` Enid Akorfa Segbey is more than just a plant enthusiast; she's a dedicated communicator for the oceans! Her passion extends beyond botanical pursuits to aquatic botany, marine science, climate change, and biodiversity conservation. As Communications Co-Lead, Enid lends her voice to our ocean-themed adventures. A proud member of The Youth in Natural Resource and Environmental Governance (Youth-NREG), she breathes life into environmental topics through engaging content. Enid's mission is to teach and inspire kids about the wonders of the ocean. Leveraging her communication skills and love for marine science, she transforms ocean education into an exciting journey for young minds. Join Enid and the team on this incredible oceanic adventure!`,
      badge: "Enid Akorfa",
      image: "/enid .jpg",
    },
    {
      title: "Adventure Co-Lead",
      description: `Dorcas Antwi, our dynamic explorer, is embarking on an exciting expedition armed with a vibrant spirit and exceptional communication skills. Committed to realizing ambitious goals, thriving in research, and coordinating clinical trials, Dorcas brings a unique energy to every adventure. With a diverse background as a Graduate Research Assistant, Camp Coordinator, and active participant in associations and volunteer work for young minds, Dorcas holds a Bachelor of Science in Marine Science. Fluent in both English and Akan, she seamlessly blends her skills to create a dynamic team environment. Passionate about climate advocacy, environmental conservation, and nurturing the leadership potential of young minds, Dorcas is an organized professional with a profound commitment to creating a positive impact. Join Dorcas on this captivating oceanic adventure, where learning, exploration, and excitement know no bounds.`,

      badge: "Dorcas Antwi",
      image:
        "/DORCAS.jpg",
    },
    {
      title: "Adventure Co-Lead",
      description: `Meet Fatawo Abdul Abubakar, our cool team member ready to take you on an incredible underwater adventure,Fatawo is currently riding the waves of knowledge as a graduate student at the University of Ghana, focusing on all things marine science. With a cool bachelor's degree in Biology Education and a pro teaching license, he's not just a science whiz but also knows how to make learning a splash of fun. But that's not all - Fatawo has been on some awesome adventures! He was part of the National Geographic 2022/2023 STEM-field internship, where he worked on a super cool project about oyster restoration and conservation. Talk about making a difference! Fatawo is not just about the books - he's a real-life superhero for the environment. As the founder and director of the Environmental Care and Sustainability Alliance, he's on a mission to teach everyone about the importance of taking care of our planet and fighting climate change. How cool is that? So, if you're ready for an oceanic journey filled with excitement, learning, and a splash of environmental superhero action, join Fatawo on our team`,

      badge: "Fatawo Abubakar",
      image: "/Fatawo.jpg",
    },
    {
      title: "Education and Outreach Co-Lead",
      description: `Ahoy, young ocean explorers! Get ready to embark on a journey of knowledge and excitement with Comfort Opoku, our fantastic team member in charge of education and outreach. Comfort is not your average explorer - she's an MPhil Marine Science student with a super cool interest in marine ecosystems. Right now, she's diving deep into research, focusing on the abundance of phytoplankton species within water bodies. Imagine all the amazing things she's discovering about aquatic life! Driven by a passion to unravel the complexities of the ocean, Comfort is not just about the books. She's fascinated by marine pollution, coastal geomorphology, and all things aquatic science. But here's the coolest part - Comfort is on a mission to empower you, the youth, and the upcoming generations in your career paths. She's not just a leader; she's here to help create a community of environmentally responsible leaders. So, if you're ready for an oceanic adventure filled with knowledge, excitement, and a touch of leadership magic, join Comfort on our team`,

      badge: "Comfort Opoku",
      image: "/Comfort.jpg",
    },
    {
      title: "Education and Outreach Co-Lead",
      description: `Hey there, young ocean detectives! Brace yourselves for an introduction to the one and only Maurice Oti Edusei, also known as PythoGIS. He's the superhero repping (M-Force) from The Mahu Lab in the Department of Marine and Fisheries Science! Maurice is not your typical guy; he's an MPhil Marine Science student on a mission, and think of him like a detective, but for oysters! His gig? Saving our shelled friends! He's all about finding them primo habitats using his Ocean Computer (think Python wizardry) and Secret Maps (GIS apps, FYI). Imagine him as the superhero diving deep, scoping out the sickest spots for oysters because happy oysters mean a lit aquatic scene! Armed with Super Statistical Powers and Data Science Gadgets, Maurice is not just a hero; he's the Oyster Guardian. Get ready for an oceanic adventure filled with mystery, excitement, and the guardian spirit of our underwater friends`,

      badge: "Maurice Edusei",
      image: "/Maurice.jpg",
    },
    {
      title: "Lab Facilitator",
      description: `Samuel is not your average lab tech; he's a skilled expert in both Science Laboratory Technology and Medical Science Laboratory Technology. Currently, Samuel is at the forefront of an exciting research project titled Oyster Shell Models for Hindcasting Holocene Environmental Conditions in Equatorial Atlantic Coastal Water of Africa. Yep, it's a bit of a mouthful, but trust us, it's fascinating! Behind the scenes, Samuel works his wizardry. He oversees the operation of lab equipment, ensures all the cool science tools are readily available, supports students in their academic pursuits, and maintains seamless communication with the Director, Dr. Edem Mahu. His professionalism, expertise, and unwavering commitment make Samuel an invaluable asset to the research team. Get ready for hands-on science adventures with Samuel, our Lab Facilitator extraordinaire!`,

      badge: "Samuel Tawiah",
      image:"/Sam.jpg",
    },
  ];

  const renderTeams = () => {
    return teams.map((team, index) => (
    
        <CardContainer key={index} className="inter-var sm:w-[26rem] bg-gradient-to-r from-blue-900 via-blue-800 to-yellow-500 p-[2px] rounded-xl shadow-lg">
          <CardBody className="  relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2]  w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold  text-white"
            >
              {team.badge}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className=" text-sm max-w-sm mt-2 text-neutral-300"
            >
              {team.title}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4 ">
              <Image
                src={team.image}
                height="1000"
                width="1000"
                className="w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>

            <CardItem
              as="p"
              translateZ="60"
              className=" text-sm max-w-sm mt-2 text-neutral-300 h-52 overflow-y-scroll "
            >
              {team.description}
            </CardItem>
          </CardBody>
        </CardContainer>
 
    ));
  };
  return (
    <div className="bg-slate-950 relative z-20">
      <div>
        <h1 className="text-4xl font-bold text-center text-white">
          Meet the <span className="text-yellow-500 underline">Team</span>{" "}
        </h1>
        <div className="">
          <div className="grid p-10 sm:p-0 sm:grid-cols-3 ">
            {renderTeams()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
