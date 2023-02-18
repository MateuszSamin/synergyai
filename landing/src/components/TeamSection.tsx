import Antoni from "../../public/team/Antoni.png";
import Dot from "../../public/team/Dot.png";
import Flare from "../../public/team/Flare.png";
import Jakub from "../../public/team/Jakub.png";
import KubaM from "../../public/team/JakubM.png";
import Karol from "../../public/team/Karol.png";
import Mateusz from "../../public/team/Mateusz.png";
import Outline from "../../public/team/Outline.png";
import Paweł from "../../public/team/Paweł.png";
import Rafał from "../../public/team/Rafał.png";
import Tomasz from "../../public/team/Tomasz.png";
import Container from "./Container";

import Image from "next/image";

const TeamSection = () => {
  return (
    <div className="w-full bg-[#000F1E] font-sora">
      <Container className="justify-between lg:h-auto py-24   text-white items-center flex flex-col ">
        <p className="text-green tracking-widest text-sm">THE TEAM</p>
        <p className="text-white tracking-wide text-4xl mt-12 font-semibold">
          Who{"'"}s working on this <span className="text-green">stuff</span>?
        </p>
        <div className="flex flex-col 2xl:flex-row mt-20  mx-auto ">
          <div className="flex flex-col mx-auto lg:flex-row space-y-6 lg:space-y-0 lg:space-x-10">
            {DevTeam.slice(0, 3).map((member, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col text-center  w-[13rem] relative z-10"
                >
                  <div className="h-[10rem] w-[10rem] mx-auto cursor-pointer ">
                    <Image
                      src={Outline}
                      alt="outline"
                      className={`absolute ${member.outlineStyling}  z-20`}
                    />
                    <Image
                      src={member.img}
                      alt="antoni"
                      className=" w-[10rem] absolute z-20"
                    />
                    <Image
                      src={Flare}
                      alt="flare"
                      className={` ${member.flareStyling} absolute z-10`}
                    />
                    <Image
                      src={Dot}
                      alt="flare"
                      className={` ${member.dotStyling} absolute z-10`}
                    />
                  </div>
                  <p className="text-white mt-4 text-2xl">{member.name}</p>
                  <p className="text-green font-lg">{member.title}</p>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col mx-auto space-y-6 lg:space-y-0 lg:flex-row 2xl:ml-10 mt-6 2xl:mt-0 lg:space-x-10">
            {DevTeam.slice(3, 5).map((member, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col text-center  w-[13rem] relative z-10"
                >
                  <div className="h-[10rem] w-[10rem] mx-auto cursor-pointer ">
                    <Image
                      src={Outline}
                      alt="outline"
                      className={`absolute ${member.outlineStyling}  z-20`}
                    />
                    <Image
                      src={member.img}
                      alt="antoni"
                      className=" w-[10rem] absolute z-20"
                    />
                    <Image
                      src={Flare}
                      alt="flare"
                      className={` ${member.flareStyling} absolute z-10`}
                    />
                  </div>
                  <p className="text-white mt-4 text-2xl">{member.name}</p>
                  <p className="text-green font-lg">{member.title}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="lg:flex flex-row gap-4 lg:gap-0 lg:space-x-10 mx-auto grid gric-cols-1 lg:grid-cols-2  mt-4 lg:mt-20">
          {AdvisorTeam.map((advisor, index) => {
            return (
              <div
                key={index}
                className="lg:flex lg:flex-col text-center w-[13rem]"
              >
                <div className="h-[10rem] w-[10rem] mx-auto cursor-pointer rounded-full bg-gradient-to-b from-green  to-blue p-[2px]">
                  <div className="flex h-full w-[full] mx-auto items-center justify-center rounded-full bg-background back">
                    <Image
                      src={advisor.img}
                      alt={advisor.name}
                      className="w-[85%]"
                    />
                  </div>
                </div>
                <p className="text-white mt-4 text-xl">{advisor.name}</p>
                <p className="text-green font-lg">Advisor</p>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};
const DevTeam = [
  {
    name: "Karol Proksa",
    img: Karol,
    title: "CEO",
    outlineStyling: "w-[8rem] bottom-14 right-4",
    dotStyling: "-top-7 w-[1rem]",
    flareStyling: "-left-5 -top-14",
  },
  {
    name: "Antoni Kiszka",
    img: Antoni,
    title: "CTO",
    outlineStyling: "w-[8rem] -top-3 -left-4",
    dotStyling: "right-2 w-[1rem]",
    flareStyling: "-rightt-5 -bottom-30",
  },
  {
    name: "Jakub Machnicki",
    img: KubaM,
    title: "CCO",
    outlineStyling: "bottom-14 left-1",
    dotStyling: "hidden",
    flareStyling: "bottom-20 ",
  },
  {
    name: "Tomasz Fiema",
    img: Tomasz,
    title: "Head of design",
    outlineStyling: "-top-5 right-1",
    dotStyling: "asd",
    flareStyling: "bottom-4  -left-4",
  },
  {
    name: "Mateusz Samin",
    img: Mateusz,
    title: "Frontend developer",
    outlineStyling: "hidden",
    dotStyling: "asd",
    flareStyling: "bottom-6 left-2",
  },
];

const AdvisorTeam = [
  {
    name: "Jakub Stefanek",
    img: Jakub,
  },
  // {
  // 	name: 'Evan Luthra',
  // 	img: Evan,
  // },
  {
    name: "Paweł Łaskarzewski",
    img: Paweł,
  },
  {
    name: "Rafał Koczan",
    img: Rafał,
  },
];

export default TeamSection;
