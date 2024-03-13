import React from "react";
import teamImg from "../assets/team1.jpg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

export const Teams = () => {
  const members = [
    {
      name: "Dr. Edem Mahu",
      title: "Director",
      image: teamImg,
      cardColor: "#feb2cc",
      about:
        "Dr. Edem Mahu is a Senior Lecturer of Marine Biogeochemistry at the University of Ghana. Her teaching and research span paleoclimatic and environmental reconstructions of marine ecosystems, marine pollution (nutrients, microplastics, heavy metals and their impact on the ocean and human health), marine conservation, and nature-based approaches to coastal challenges. She currently leads the National Geographic Society project “Oyster Reef Restoration and Conservation for Livelihood and Ecosystem Protection in Anyanui” She co-leads the MANCOGA: Mangroves as nature-based solutions to coastal hazards in Ghana project. Dr. Mahu is a Fellow of the Royal Society's Future Leaders African Independent Research (FLAIR) Programme. She is also a research fellow on the African Academy of Sciences' AU-EU ARISE Programme, leading the study Oyster Shell Models for Hindcasting Holocene Environmental Conditions in Equatorial Atlantic Coastal Waters of Africa. She is a member of the trustee board for the partnership for observation of the global oceans, a steering committee member for CoastPredict, a member of the executive board of the Global Ocean Corps and Conveyor, EQUISEA, a member of the academic board for the College of basic and applied sciences academic board at the University of Ghana. She also serves on the board of The Ocean Best Practices system. Dr. Mahu has received several awards and recognitions including being the recipient of the 2022 AGU Africa Award for Research Excellence in Ocean Science. Dr. Mahu is passionate about mentoring the next generation of marine scientists in Africa and has mentored several undergraduates and graduate students in Ghana. She is a current mentor on the National Geographic STEM Field Assistant Program",
    },

    {
      name: "Kingsley Kojo Darko Abaye",
      title: " Program Manager",
      image: teamImg,
      cardColor: "#c8d6d6",
      about:
        "Kingsley is the passionate navigator at the helm of FOLA - the Future Ocean Leaders Academy. Currently pursuing an MPhil, he serves as the dedicated Program Manager, steering FOLA towards success. Although still navigating the academic seas, Kingsley is setting sail with a mission. His expertise in Marine Pollution, coupled with experience as a Search and Rescue Officer and Director of Programs at a children's well-being NGO, makes him the perfect captain for FOLA. In his role, Kingsley ensures a smooth voyage for FOLA, coordinating with all teams to make our oceanic adventures a hit. His principle is simple yet powerful:(Get things done) and his greatest joy comes from putting smiles on the faces of children. Join Kingsley and the FOLA crew on this fantastic oceanic journey, where learning is fun, and adventures never end.",
    },
    {
      name: "Gabriella Akpah Yeboah",
      title: "Assistant Program Manager",
      cardColor: "#ffdebb",
      image: teamImg,
      about:
        "Gabriella Akpah Yeboah, our Assistant Program Manager, is not just a marine scientist; she's a dedicated explorer of the ocean's mysteries. Currently pursuing her PhD at the University of Ghana, Gabriella specializes in oyster sclerochronology, unraveling the secrets of the past to understand environmental changes and historical trends in population and climate. Additionaly, she is actively involved in the Mahu Biogeochemistry Working Group, contributing to resaerch in this field. Her expertise isn't confined to one area - she's also a champion against marine plastic pollution, a wizard in remote sensing, and an enthusiast in mycology. As our Assistant Program Manager and Alumni Relations Specialist, Gabriella takes the lead in connecting with our program graduates. She ensures a strong bond with our alumni community, fostering ongoing engagement and collaboration.",
    },
    {
      name: "Tyronne Jude Vanderpuye-Orgle",
      title: "Communications Co-Lead",
      image: teamImg,
      cardColor: "#e5dcd3",
      about:
        "Tyronne, a passionate ocean enthusiast, seamlessly combines his Marine Science expertise with a tech-savvy approach, creating a unique blend for exploring the underwater realm. Equipped with insights from academic pursuits, he is dedicated to ocean conservation and actively raises awareness. Beyond textbooks, Tyronne's deep connection with the ocean translates into inspiring photography, narrating powerful stories and emphasizing the importance of preserving its captivating beauty. In Tyronne's world, passion and purpose converge as he strives to instill appreciation for the ocean and drive positive change. Join him on this immersive journey, where each snapshot tells a tale of the ocean's enchantment and the need for its preservation.",
    },
    {
      name: "Enid Akorfa",
      title: "Communications Co-Lead",
      image: teamImg,
      cardColor: "#ffcd00",
      about:
        "Enid Akorfa Segbey is more than just a plant enthusiast; she's a dedicated communicator for the oceans! Her passion extends beyond botanical pursuits to aquatic botany, marine science, climate change, and biodiversity conservation. As Communications Co-Lead, Enid lends her voice to our ocean-themed adventures. A proud member of The Youth in Natural Resource and Environmental Governance (Youth-NREG), she breathes life into environmental topics through engaging content. Enid's mission is to teach and inspire kids about the wonders of the ocean. Leveraging her communication skills and love for marine science, she transforms ocean education into an exciting journey for young minds. Join Enid and the team on this incredible oceanic adventure!",
    },
    {
      name: "Dorcas Antwi",
      title: "Adventure Co-Lead",
      cardColor: "#ffdebb",
      image: teamImg,
      about:
        "Dorcas Antwi, our dynamic explorer, is embarking on an exciting expedition armed with a vibrant spirit and exceptional communication skills. Committed to realizing ambitious goals, thriving in research, and coordinating clinical trials, Dorcas brings a unique energy to every adventure. With a diverse background as a Graduate Research Assistant, Camp Coordinator, and active participant in associations and volunteer work for young minds, Dorcas holds a Bachelor of Science in Marine Science. Fluent in both English and Akan, she seamlessly blends her skills to create a dynamic team environment. Passionate about climate advocacy, environmental conservation, and nurturing the leadership potential of young minds, Dorcas is an organized professional with a profound commitment to creating a positive impact. Join Dorcas on this captivating oceanic adventure, where learning, exploration, and excitement know no bounds.",
    },
    {
      name: "Fatawo Abubakar",
      title: "Adventure Co-Lead",
      cardColor: "#ffdebb",
      image: teamImg,
      about:
        "Meet Fatawo Abdul Abubakar, our cool team member ready to take you on an incredible underwater adventure,Fatawo is currently riding the waves of knowledge as a graduate student at the University of Ghana, focusing on all things marine science. With a cool bachelor's degree in Biology Education and a pro teaching license, he's not just a science whiz but also knows how to make learning a splash of fun. But that's not all - Fatawo has been on some awesome adventures! He was part of the National Geographic 2022/2023 STEM-field internship, where he worked on a super cool project about oyster restoration and conservation. Talk about making a difference! Fatawo is not just about the books - he's a real-life superhero for the environment. As the founder and director of the Environmental Care and Sustainability Alliance, he's on a mission to teach everyone about the importance of taking care of our planet and fighting climate change. How cool is that? So, if you're ready for an oceanic journey filled with excitement, learning, and a splash of environmental superhero action, join Fatawo on our team",
    },
    {
      name: "Comfort Opoku",
      title: "Education and Outreach Co-Lead",
      cardColor: "#ffdebb",
      image: teamImg,
      about:
        "Ahoy, young ocean explorers! Get ready to embark on a journey of knowledge and excitement with Comfort Opoku, our fantastic team member in charge of education and outreach. Comfort is not your average explorer - she's an MPhil Marine Science student with a super cool interest in marine ecosystems. Right now, she's diving deep into research, focusing on the abundance of phytoplankton species within water bodies. Imagine all the amazing things she's discovering about aquatic life! Driven by a passion to unravel the complexities of the ocean, Comfort is not just about the books. She's fascinated by marine pollution, coastal geomorphology, and all things aquatic science. But here's the coolest part - Comfort is on a mission to empower you, the youth, and the upcoming generations in your career paths. She's not just a leader; she's here to help create a community of environmentally responsible leaders. So, if you're ready for an oceanic adventure filled with knowledge, excitement, and a touch of leadership magic, join Comfort on our team",
    },
    {
      name: "Maurice Edusei",
      title: "Lab Facilitator",
      cardColor: "#ffdebb",
      image: teamImg,
      about:
        "Hey there, young ocean detectives! Brace yourselves for an introduction to the one and only Maurice Oti Edusei, also known as PythoGIS. He's the superhero repping (M-Force) from The Mahu Lab in the Department of Marine and Fisheries Science! Maurice is not your typical guy; he's an MPhil Marine Science student on a mission, and think of him like a detective, but for oysters! His gig? Saving our shelled friends! He's all about finding them primo habitats using his Ocean Computer (think Python wizardry) and Secret Maps (GIS apps, FYI). Imagine him as the superhero diving deep, scoping out the sickest spots for oysters because happy oysters mean a lit aquatic scene! Armed with Super Statistical Powers and Data Science Gadgets, Maurice is not just a hero; he's the Oyster Guardian. Get ready for an oceanic adventure filled with mystery, excitement, and the guardian spirit of our underwater friends",
    },
    {
      name: "Samuel Tawiah",
      title: "Lab Facilitator",
      cardColor: "#ffdebb",
      image: teamImg,
      about:
        "Samuel is not your average lab tech; he's a skilled expert in both Science Laboratory Technology and Medical Science Laboratory Technology. Currently, Samuel is at the forefront of an exciting research project titled Oyster Shell Models for Hindcasting Holocene Environmental Conditions in Equatorial Atlantic Coastal Water of Africa. Yep, it's a bit of a mouthful, but trust us, it's fascinating! Behind the scenes, Samuel works his wizardry. He oversees the operation of lab equipment, ensures all the cool science tools are readily available, supports students in their academic pursuits, and maintains seamless communication with the Director, Dr. Edem Mahu. His professionalism, expertise, and unwavering commitment make Samuel an invaluable asset to the research team. Get ready for hands-on science adventures with Samuel, our Lab Facilitator extraordinaire!",
    },
    
  ];

  const renderTeamsCard = () => {
    return members.map((member, index) => {
      return (
        <div
          key={index}
          style={{
            backgroundColor: `${member.cardColor}`,
          }}
          className={`w-[18%]  rounded-t-[220px] bg-[${member.cardColor}] text-center bg-contain bg-no-repeat teams-card`}
        >
          <h1 className="text-center pt-20 font-bold text-xl">{member.name}</h1>
          <p>{member.title}</p>
          <div className=" p-5 ">
            <img
              src={member.image}
              alt="fdhf"
              className="rounded-xl rounded-t-[110px] grayscale"
            />
          </div>
          <p className="p-5 text-lg card-content-desktop">{member.about}</p>
        </div>
      );
    });
  };

  // const renderTeamsCardMobile = () => {
  //   return members.map((member, index) => {
  //     return (
  //       <SplideSlide>
  //         <div
  //           className={` rounded-[12px] bg-zinc-500 text-center text-white  teams-card-mobile`}
  //         >
  //           <h1 className="text-center pt-20 font-bold text-white uppercase text-xl">
  //             {member.name}
  //           </h1>
  //           <p className="text-lg">{member.title}</p>
  //           <div className=" p-5  ">
  //             <img
  //               src={member.image}
  //               alt="fdhf"
  //               className="rounded-xl rounded-t-[12px] grayscale"
  //             />
  //           </div>
  //           <p className=" card-content text-white">{member.about}</p>
  //         </div>
  //       </SplideSlide>
  //     );
  //   });
  // };

  return (
    <div className=" h-[90vh]">
      <h1 className="text-center pt-10 text-6xl text-white font-bold px-5 sm:px-0  h-[10vh]">
        Meet the <span className="text-pink-600 underline"> Team</span>{" "}
      </h1>

      <div className="sm:flex items-end justify-center hidden relative px-10 h-[80vh]">
        <div className="text-white text-8xl absolute top-32 animate-pulse">
          <MdKeyboardDoubleArrowUp />
        </div>
        {renderTeamsCard()}
      </div>

      <div className="grid   place-items-center sm:hidden bg-[#0c162c] ">
        <Splide
          options={{
            gap: "",
          }}
          aria-label="My Favorite Images"
          className=" h-full"
        >
          <SplideSlide>
            <div
              className={`  rounded-[12px] bg-zinc-500 text-center text-white h-full teams-card-mobile`}
            >
              <h1 className="text-center pt-20 font-bold text-white uppercase text-xl">
                jennifer
              </h1>
              <p className="text-lg">ceo</p>
              <div className=" p-5  ">
                <img
                  src={teamImg}
                  alt="fdhf"
                  className="rounded-xl rounded-t-[12px] grayscale"
                />
              </div>
              <p className=" card-content text-white">
                Dr. Edem Mahu is a Senior Lecturer of Marine Biogeochemistry at
                the University of Ghana. Her teaching and research span
                paleoclimatic and environmental reconstructions of marine
                ecosystems, marine pollution (nutrients, microplastics, heavy
                metals and their impact on the ocean and human health), marine
                conservation, and nature-based approaches to coastal challenges.
                She currently leads the National Geographic Society project
                “Oyster Reef Restoration and Conservation for Livelihood and
                Ecosystem Protection in Anyanui” She co-leads the MANCOGA:
                Mangroves as nature-based solutions to coastal hazards in Ghana
                project. Dr. Mahu is a Fellow of the Royal Society's Future
                Leaders African Independent Research (FLAIR) Programme. She is
                also a research fellow on the African Academy of Sciences' AU-EU
                ARISE Programme, leading the study Oyster Shell Models for
                Hindcasting Holocene Environmental Conditions in Equatorial
                Atlantic Coastal Waters of Africa. She is a member of the
                trustee board for the partnership for observation of the global
                oceans, a steering committee member for CoastPredict, a member
                of the executive board of the Global Ocean Corps and Conveyor,
                EQUISEA, a member of the academic board for the College of basic
                and applied sciences academic board at the University of Ghana.
                She also serves on the board of The Ocean Best Practices system.
                Dr. Mahu has received several awards and recognitions including
                being the recipient of the 2022 AGU Africa Award for Research
                Excellence in Ocean Science. Dr. Mahu is passionate about
                mentoring the next generation of marine scientists in Africa and
                has mentored several undergraduates and graduate students in
                Ghana. She is a current mentor on the National Geographic STEM
                Field Assistant Program
              </p>
            </div>
          </SplideSlide>

          <SplideSlide>
            <div
              className={` rounded-[12px] bg-zinc-500 text-center text-white  teams-card-mobile`}
            >
              <h1 className="text-center pt-20 font-bold text-white uppercase text-xl">
                jennifer
              </h1>
              <p className="text-lg">ceo</p>
              <div className=" p-5  ">
                <img
                  src={teamImg}
                  alt="fdhf"
                  className="rounded-xl rounded-t-[12px] grayscale"
                />
              </div>
              <p className=" card-content text-white">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
                suscipit earum ad molestiae ex vero esse dolores ea, repellendus
                eos explicabo facere, quaerat debitis dicta rem reprehenderit,
                sed cupiditate minus.
              </p>
            </div>
          </SplideSlide>

          <SplideSlide>
            <div
              className={` rounded-[12px] bg-zinc-500 text-center text-white  teams-card-mobile`}
            >
              <h1 className="text-center pt-20 font-bold text-white uppercase text-xl">
                jennifer
              </h1>
              <p className="text-lg">ceo</p>
              <div className=" p-5  ">
                <img
                  src={teamImg}
                  alt="fdhf"
                  className="rounded-xl rounded-t-[12px] grayscale"
                />
              </div>
              <p className="card-content text-white">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
                suscipit earum ad molestiae ex vero esse dolores ea, repellendus
                eos explicabo facere, quaerat debitis dicta rem reprehenderit,
                sed cupiditate minus.
              </p>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};
