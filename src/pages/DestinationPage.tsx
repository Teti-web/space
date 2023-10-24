import React, { useState } from "react";
import Card from "../components/Card";
import Title from "../components/Title";
import moonIMg from "../assets/moon.png";
import marsImg from "../assets/mars.png";
import europaImg from "../assets/europa.png";
import titanImg from "../assets/titan.png";

const DestinationPage = () => {
  const [visibleCard, setVisibleCard] = useState<string | null>("MOON");
  const handleCardVisibility = (cardName: string) => {
    setVisibleCard(cardName);
    console.log(cardName);
  };

  return (
    <div className="bg-imgDest relative h-screen w-full overflow-x-hidden bg-cover bg-center bg-no-repeat pt-[88px] text-white md:pt-[136px] lg:pt-[175px]">
      <Title title="Pick your destination" span="01" />
      <Card
        id="1"
        title="MOON"
        description="See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
        img={moonIMg}
        detail1="384,400 km"
        detail2="3 days"
        visibleCard={visibleCard === "MOON"}
        handleCardVisibility={handleCardVisibility}
      />

      <Card
        id="2"
        title="MARS"
        description="Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!"
        img={marsImg}
        detail1="225 MIL. km"
        detail2="9 months"
        visibleCard={visibleCard === "MARS"}
        handleCardVisibility={handleCardVisibility}
      />
      <Card
        id="3"
        title="EUROPA"
        description="The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."
        img={europaImg}
        detail1="628 MIL. km"
        detail2="3 years"
        visibleCard={visibleCard === "EUROPA"}
        handleCardVisibility={handleCardVisibility}
      />
      <Card
        id="4"
        title="TITAN"
        description="The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."
        img={titanImg}
        detail1="1.6 BIL. km"
        detail2="7 years"
        visibleCard={visibleCard === "TITAN"}
        handleCardVisibility={handleCardVisibility}
      />
    </div>
  );
};

export default DestinationPage;
