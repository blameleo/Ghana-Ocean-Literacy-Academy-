import React from "react";
import teamImg from "../assets/team1.jpg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

export const Teams = () => {
  const members = [
    {
      name: "Jennifer",
      title: "Ceo",
      image: teamImg,
      cardColor: "#feb2cc",
      about:
        "llorem,fsdfs.sdfhuisdf, sdfhsufsdf,suidfsdf,sduihf sdfiusdgfhs fh dsafga fugdsh faksdgh fgags hdfhajshdfh asjdf  uihsdgfhagsdf iauew9 ershdafjsdf",
    },

    {
      name: "kingsley",
      title: "software engineer",
      image: teamImg,
      cardColor: "#c8d6d6",
      about:
        "llorem,fsdfs.sdfhuisdf, sdfhsufsdf,suidfsdf,sduihf sdfiusdgfhs fh dsafga fugdsh faksdgh fgags hdfhajshdfh asjdf  uihsdgfhagsdf iauew9 ershdafjsdf",
    },
    {
      name: "Thomas",
      title: "marketing",
      image: teamImg,
      cardColor: "#e5dcd3",
      about:
        "llorem,fsdfs.sdfhuisdf, sdfhsufsdf,suidfsdf,sduihf sdfiusdgfhs fh dsafga fugdsh faksdgh fgags hdfhajshdfh asjdf  uihsdgfhagsdf iauew9 ershdafjsdf",
    },
    {
      name: "nicholas",
      title: "auditor",
      image: teamImg,
      cardColor: "#ffcd00",
      about:
        "llorem,fsdfs.sdfhuisdf, sdfhsufsdf,suidfsdf,sduihf sdfiusdgfhs fh dsafga fugdsh faksdgh fgags hdfhajshdfh asjdf  uihsdgfhagsdf iauew9 ershdafjsdf",
    },
    {
      name: "Ewurama",
      title: "accountant",
      cardColor: "#ffdebb",
      image: teamImg,
      about:
        "llorem,fsdfs.sdfhuisdf, sdfhsufsdf,suidfsdf,sduihf sdfiusdgfhs fh dsafga fugdsh faksdgh fgags hdfhajshdfh asjdf  uihsdgfhagsdf iauew9 ershdafjsdf",
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
          <p className="p-5 text-lg card-content">{member.about}</p>
        </div>
      );
    });
  };

  const renderTeamsCardMobile = () => {
    return members.map((member, index) => {
      return (
        <SplideSlide>
          <div
            className={` rounded-[12px] bg-zinc-500 text-center text-white  teams-card-mobile`}
          >
            <h1 className="text-center pt-20 font-bold text-white uppercase text-xl">
              {member.name}
            </h1>
            <p className="text-lg">{member.title}</p>
            <div className=" p-5  ">
              <img
                src={member.image}
                alt="fdhf"
                className="rounded-xl rounded-t-[12px] grayscale"
              />
            </div>
            <p className=" card-content text-white">{member.about}</p>
          </div>
        </SplideSlide>
      );
    });
  };

  return (
    <div className="bg-[#0c162c] ">
      <h1 className="text-center pt-10 text-7xl text-white font-bold px-5 sm:px-0">
        Meet the <span className="text-pink-600 underline"> Team</span>{" "}
      </h1>

      <div className="sm:flex items-end justify-center  hidden  h-[90dvh] relative">
        <div className="text-white text-8xl absolute top-32 animate-pulse">
          <MdKeyboardDoubleArrowUp />
        </div>
        {renderTeamsCard()}
      </div>

      <div className="grid   place-items-center sm:hidden bg-[#0c162c] ">
        <Splide
          options={{
            gap: "1rem",
          }}
          aria-label="My Favorite Images"
          className=" h-full"
        >
          <SplideSlide>
            <div
              className={`  rounded-[12px] bg-zinc-500 text-center text-white h-fulls teams-card-mobile`}
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
