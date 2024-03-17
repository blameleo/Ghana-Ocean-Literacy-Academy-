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
      description: ` Dr. Edem Mahu is a Senior Lecturer of Marine Biogeochemistry at the
      University of Ghana. Her teaching and research span paleoclimatic
      and environmental reconstructions of marine ecosystems, marine
      pollution (nutrients, microplastics, heavy metals and their impact
      on the ocean and human health), marine conservation, and
      nature-based approaches to coastal challenges. She currently leads
      the National Geographic Society project “Oyster Reef Restoration and
      Conservation for Livelihood and Ecosystem Protection in Anyanui” She
      co-leads the MANCOGA: Mangroves as nature-based solutions to coastal
      hazards in Ghana project. Dr. Mahu is a Fellow of the Royal
      Society's Future Leaders African Independent Research (FLAIR)
      Programme. She is also a research fellow on the African Academy of
      Sciences' AU-EU ARISE Programme, leading the study Oyster Shell
      Models for Hindcasting Holocene Environmental Conditions in
      Equatorial Atlantic Coastal Waters of Africa. She is a member of the
      trustee board for the partnership for observation of the global
      oceans, a steering committee member for CoastPredict, a member of
      the executive board of the Global Ocean Corps and Conveyor, EQUISEA,
      a member of the academic board for the College of basic and applied
      sciences academic board at the University of Ghana. She also serves
      on the board of The Ocean Best Practices system. Dr. Mahu has
      received several awards and recognitions including being the
      recipient of the 2022 AGU Africa Award for Research Excellence in
      Ocean Science. Dr. Mahu is passionate about mentoring the next
      generation of marine scientists in Africa and has mentored several
      undergraduates and graduate students in Ghana. She is a current
      mentor on the National Geographic STEM Field Assistant Program`,
      badge: "Dr. Edem Mahu",
      image:
        "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Programme Manage",
      description: ` Dr. Edem Mahu is a Senior Lecturer of Marine Biogeochemistry at the
      University of Ghana. Her teaching and research span paleoclimatic
      and environmental reconstructions of marine ecosystems, marine
      pollution (nutrients, microplastics, heavy metals and their impact
      on the ocean and human health), marine conservation, and
      nature-based approaches to coastal challenges. She currently leads
      the National Geographic Society project “Oyster Reef Restoration and
      Conservation for Livelihood and Ecosystem Protection in Anyanui” She
      co-leads the MANCOGA: Mangroves as nature-based solutions to coastal
      hazards in Ghana project. Dr. Mahu is a Fellow of the Royal
      Society's Future Leaders African Independent Research (FLAIR)
      Programme. She is also a research fellow on the African Academy of
      Sciences' AU-EU ARISE Programme, leading the study Oyster Shell
      Models for Hindcasting Holocene Environmental Conditions in
      Equatorial Atlantic Coastal Waters of Africa. She is a member of the
      trustee board for the partnership for observation of the global
      oceans, a steering committee member for CoastPredict, a member of
      the executive board of the Global Ocean Corps and Conveyor, EQUISEA,
      a member of the academic board for the College of basic and applied
      sciences academic board at the University of Ghana. She also serves
      on the board of The Ocean Best Practices system. Dr. Mahu has
      received several awards and recognitions including being the
      recipient of the 2022 AGU Africa Award for Research Excellence in
      Ocean Science. Dr. Mahu is passionate about mentoring the next
      generation of marine scientists in Africa and has mentored several
      undergraduates and graduate students in Ghana. She is a current
      mentor on the National Geographic STEM Field Assistant Program`,
      badge: "Kingsley Kojo Darko Abaye",
      image:
        "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Director",
      description: ` Dr. Edem Mahu is a Senior Lecturer of Marine Biogeochemistry at the
      University of Ghana. Her teaching and research span paleoclimatic
      and environmental reconstructions of marine ecosystems, marine
      pollution (nutrients, microplastics, heavy metals and their impact
      on the ocean and human health), marine conservation, and
      nature-based approaches to coastal challenges. She currently leads
      the National Geographic Society project “Oyster Reef Restoration and
      Conservation for Livelihood and Ecosystem Protection in Anyanui” She
      co-leads the MANCOGA: Mangroves as nature-based solutions to coastal
      hazards in Ghana project. Dr. Mahu is a Fellow of the Royal
      Society's Future Leaders African Independent Research (FLAIR)
      Programme. She is also a research fellow on the African Academy of
      Sciences' AU-EU ARISE Programme, leading the study Oyster Shell
      Models for Hindcasting Holocene Environmental Conditions in
      Equatorial Atlantic Coastal Waters of Africa. She is a member of the
      trustee board for the partnership for observation of the global
      oceans, a steering committee member for CoastPredict, a member of
      the executive board of the Global Ocean Corps and Conveyor, EQUISEA,
      a member of the academic board for the College of basic and applied
      sciences academic board at the University of Ghana. She also serves
      on the board of The Ocean Best Practices system. Dr. Mahu has
      received several awards and recognitions including being the
      recipient of the 2022 AGU Africa Award for Research Excellence in
      Ocean Science. Dr. Mahu is passionate about mentoring the next
      generation of marine scientists in Africa and has mentored several
      undergraduates and graduate students in Ghana. She is a current
      mentor on the National Geographic STEM Field Assistant Program`,
      badge: "Dr. Edem Mahu",
      image:
        "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Director",
      description: ` Dr. Edem Mahu is a Senior Lecturer of Marine Biogeochemistry at the
      University of Ghana. Her teaching and research span paleoclimatic
      and environmental reconstructions of marine ecosystems, marine
      pollution (nutrients, microplastics, heavy metals and their impact
      on the ocean and human health), marine conservation, and
      nature-based approaches to coastal challenges. She currently leads
      the National Geographic Society project “Oyster Reef Restoration and
      Conservation for Livelihood and Ecosystem Protection in Anyanui” She
      co-leads the MANCOGA: Mangroves as nature-based solutions to coastal
      hazards in Ghana project. Dr. Mahu is a Fellow of the Royal
      Society's Future Leaders African Independent Research (FLAIR)
      Programme. She is also a research fellow on the African Academy of
      Sciences' AU-EU ARISE Programme, leading the study Oyster Shell
      Models for Hindcasting Holocene Environmental Conditions in
      Equatorial Atlantic Coastal Waters of Africa. She is a member of the
      trustee board for the partnership for observation of the global
      oceans, a steering committee member for CoastPredict, a member of
      the executive board of the Global Ocean Corps and Conveyor, EQUISEA,
      a member of the academic board for the College of basic and applied
      sciences academic board at the University of Ghana. She also serves
      on the board of The Ocean Best Practices system. Dr. Mahu has
      received several awards and recognitions including being the
      recipient of the 2022 AGU Africa Award for Research Excellence in
      Ocean Science. Dr. Mahu is passionate about mentoring the next
      generation of marine scientists in Africa and has mentored several
      undergraduates and graduate students in Ghana. She is a current
      mentor on the National Geographic STEM Field Assistant Program`,
      badge: "Dr. Edem Mahu",
      image:
        "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Director",
      description: ` Dr. Edem Mahu is a Senior Lecturer of Marine Biogeochemistry at the
            University of Ghana. Her teaching and research span paleoclimatic
            and environmental reconstructions of marine ecosystems, marine
            pollution (nutrients, microplastics, heavy metals and their impact
            on the ocean and human health), marine conservation, and
            nature-based approaches to coastal challenges. She currently leads
            the National Geographic Society project “Oyster Reef Restoration and
            Conservation for Livelihood and Ecosystem Protection in Anyanui” She
            co-leads the MANCOGA: Mangroves as nature-based solutions to coastal
            hazards in Ghana project. Dr. Mahu is a Fellow of the Royal
            Society's Future Leaders African Independent Research (FLAIR)
            Programme. She is also a research fellow on the African Academy of
            Sciences' AU-EU ARISE Programme, leading the study Oyster Shell
            Models for Hindcasting Holocene Environmental Conditions in
            Equatorial Atlantic Coastal Waters of Africa. She is a member of the
            trustee board for the partnership for observation of the global
            oceans, a steering committee member for CoastPredict, a member of
            the executive board of the Global Ocean Corps and Conveyor, EQUISEA,
            a member of the academic board for the College of basic and applied
            sciences academic board at the University of Ghana. She also serves
            on the board of The Ocean Best Practices system. Dr. Mahu has
            received several awards and recognitions including being the
            recipient of the 2022 AGU Africa Award for Research Excellence in
            Ocean Science. Dr. Mahu is passionate about mentoring the next
            generation of marine scientists in Africa and has mentored several
            undergraduates and graduate students in Ghana. She is a current
            mentor on the National Geographic STEM Field Assistant Program`,
      badge: "Dr. Edem Mahu",
      image:
        "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Director",
      description: `
            Dr. Edem Mahu is a Senior Lecturer of Marine Biogeochemistry at the
            University of Ghana. Her teaching and research span paleoclimatic
            and environmental reconstructions of marine ecosystems, marine
            pollution (nutrients, microplastics, heavy metals and their impact
            on the ocean and human health), marine conservation, and
            nature-based approaches to coastal challenges. She currently leads
            the National Geographic Society project “Oyster Reef Restoration and
            Conservation for Livelihood and Ecosystem Protection in Anyanui” She
            co-leads the MANCOGA: Mangroves as nature-based solutions to coastal
            hazards in Ghana project. Dr. Mahu is a Fellow of the Royal
            Society's Future Leaders African Independent Research (FLAIR)
            Programme. She is also a research fellow on the African Academy of
            Sciences' AU-EU ARISE Programme, leading the study Oyster Shell
            Models for Hindcasting Holocene Environmental Conditions in
            Equatorial Atlantic Coastal Waters of Africa. She is a member of the
            trustee board for the partnership for observation of the global
            oceans, a steering committee member for CoastPredict, a member of
            the executive board of the Global Ocean Corps and Conveyor, EQUISEA,
            a member of the academic board for the College of basic and applied
            sciences academic board at the University of Ghana. She also serves
            on the board of The Ocean Best Practices system. Dr. Mahu has
            received several awards and recognitions including being the
            recipient of the 2022 AGU Africa Award for Research Excellence in
            Ocean Science. Dr. Mahu is passionate about mentoring the next
            generation of marine scientists in Africa and has mentored several
            undergraduates and graduate students in Ghana. She is a current
            mentor on the National Geographic STEM Field Assistant Program`,

      badge: "Dr. Edem Mahu",
      image:
        "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const renderTeams = () => {
    return teams.map((team, index) => (
    
        <CardContainer key={index} className="inter-var sm:w-[26rem] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-700 p-[2px] rounded-xl shadow-lg">
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
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={team.image}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
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
          Meet the <span className="text-pink-500 underline">Team</span>{" "}
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
