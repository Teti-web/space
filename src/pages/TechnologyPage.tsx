import React, { useState } from "react";
import Slider from "../components/Slider";
import Title from "../components/Title";
import Launch from "../assets/launch.jpg";
import LaunchDesk from "../assets/launch-desc.jpg";
import Spaceport from "../assets/Spaceport.jpg";
import SpaceportDesk from "../assets/spaceport-desc.jpg";
import Capsule from "../assets/capsule.jpg";
import CapsuleDesc from "../assets/capsule-desk.jpg";

const TechnologyPage = () => {
  const [visibleSlide, setVisibleSlide] = useState<number>(1);
  const handleSlideVisibility = (idSlide: number) => {
    setVisibleSlide(idSlide);
  };
  return (
    <section className="bg-imgTech relative h-screen w-full overflow-x-hidden bg-cover bg-center bg-no-repeat pt-[88px] text-white md:pt-[136px] lg:pt-[150px]">
      <Title title="SPACE LAUNCH 101" span="03" />
      <Slider
        sliders={[
          {
            id: 1,
            img: Launch,
            imgDesktop: LaunchDesk,
            title: "LAUNCH VEHICLE",
            subtitle: "THE TERMINOLOGY…",
            descriptions:
              "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
          },
          {
            id: 2,
            img: Spaceport,
            imgDesktop: SpaceportDesk,
            title: "SPACEPORT",
            subtitle: "THE TERMINOLOGY…",
            descriptions:
              "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
          },
          {
            id: 3,
            img: Capsule,
            imgDesktop: CapsuleDesc,
            title: "SPACE CAPSULE",
            subtitle: "THE TERMINOLOGY…",
            descriptions:
              "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
          },
        ]}
        visibleSlider={visibleSlide}
        handleSlideVisibility={handleSlideVisibility}
        navigationNumber={true}
      />
    </section>
  );
};

export default TechnologyPage;
