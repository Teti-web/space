import React from "react";
import CardNavigation from "./CardNavigation";

type cardProps = {
  id: string;
  img: string;
  title: string;
  description: string;
  detail1: string;
  detail2: string;
  visibleCard: boolean;
  handleCardVisibility: (cardName: string) => void;
};

const Card = ({
  title,
  description,
  detail1,
  detail2,
  img,
  visibleCard,
  handleCardVisibility,
}: cardProps) => {
  return (
    <section
      className={`pt-[10px] md:pt-[15px] lg:pt-[64px] ${
        visibleCard ? "" : "hidden"
      }`}
    >
      <div className="grid items-center px-[24px] md:px-[97px] lg:grid-cols-[60%_auto] lg:pl-0 lg:pr-[163px]">
        <img
          className="w-hull animate-fadeInLeft h-auto max-w-[170px] justify-self-center md:max-w-[300px] lg:max-w-[534px] "
          src={img}
          alt={title}
          loading="lazy"
        />
        <div>
          <CardNavigation
            names={[
              { id: "1", title: "MOON" },
              { id: "2", title: "MARS" },
              { id: "3", title: "EUROPA" },
              { id: "4", title: "TITAN" },
            ]}
            visibleCard={title}
            handleCardVisibility={handleCardVisibility}
          />
          <div className="border-grey animate-fadeIn border-b border-solid pb-[32px]">
            <h2 className="text-center font-secondary text-[56px] uppercase text-white md:text-[80px] lg:text-left lg:text-[100px]">
              {title}
            </h2>
            <p className="leading-25 md:leading-28 lg:leading-32 text-center font-primary text-[15px] text-blue md:text-[16px] lg:text-left lg:text-[18px]">
              {description}
            </p>
          </div>
          <div className="animate-fadeIn flex flex-col gap-[32px] md:flex-row  md:justify-start lg:gap-[65px] lg:pt-[28px]">
            <p className="text-center font-secondary text-[28px] font-normal uppercase text-white lg:text-left ">
              <span className="block font-primary text-[14px] tracking-[2.362px] text-blue">
                AVG. DISTANCE
              </span>
              {detail1}
            </p>
            <p className="text-center font-secondary text-[28px] font-normal uppercase text-white lg:text-left ">
              <span className="block font-primary text-[14px] tracking-[2.362px] text-blue">
                Est. travel time
              </span>
              {detail2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
