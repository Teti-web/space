import React, { useState } from "react";
import Slider from "../components/Slider";
import Title from "../components/Title";
import Dougglas from "../assets/douglas-hurley.png";
import Shuttl from "../assets/mark-shuttleworth.png";
import Glover from "../assets/viktor-glover.png";
import Ansari from "../assets/anousheh-ansari.png";

const CrewPage = () => {
  const [visibleSlide, setVisibleSlide] = useState<number>(1);
  const handleSlideVisibility = (idSlide: number) => {
    setVisibleSlide(idSlide);
  };
  return (
    <section className="bg-imgCrew relative h-screen w-full overflow-x-hidden bg-cover bg-center bg-no-repeat pt-[88px] text-white md:pt-[136px] lg:pt-[150px]">
      <Title title="Meet your crew" span="02" />
      <Slider
        sliders={[
          {
            id: 1,
            img: Dougglas,
            title: "Douglas Hurley",
            subtitle: "Commander",
            descriptions:
              "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
          },
          {
            id: 2,
            img: Shuttl,
            title: "MARK SHUTTLEWORTH",
            subtitle: "Mission Specialist ",
            descriptions:
              "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
          },

          {
            id: 3,
            img: Glover,
            title: "Victor Glover",
            subtitle: "PILOT",
            descriptions:
              "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
          },
          {
            id: 4,
            img: Ansari,
            title: "Anousheh Ansari",
            subtitle: "Flight Engineer",
            descriptions:
              "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.  ",
          },
        ]}
        visibleSlider={visibleSlide}
        handleSlideVisibility={handleSlideVisibility}
        navigationNumber={false}
      />
    </section>
  );
};

export default CrewPage;
