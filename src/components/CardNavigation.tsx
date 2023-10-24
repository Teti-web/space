import React, { useState } from "react";

type CardNavigationProps = {
  names: {
    id: string;
    title: string;
  }[];
  handleCardVisibility: (cardName: string) => void;
  visibleCard: string | null;
};
const CardNavigation = ({
  names,
  handleCardVisibility,
  visibleCard,
}: CardNavigationProps) => {
  return (
    <div className="flex justify-center gap-[26.5px] pb-[15px] md:gap-[35px] lg:justify-start">
      {names.map((name) => (
        <button
          className={`hover:after:bg-opacity-50 relative block font-primary uppercase text-blue transition-all duration-500 ease-in-out hover:after:absolute hover:after:mt-[15px] hover:after:block hover:after:h-[3px] hover:after:w-full hover:after:bg-white hover:after:transition-all hover:after:duration-500 hover:after:ease-in-out ${
            name.title === visibleCard
              ? "after:absolute after:mt-[15px] after:block after:h-[3px] after:w-full after:bg-white "
              : ""
          }`}
          key={name.id}
          onClick={() => handleCardVisibility(name.title)}
        >
          {name.title}
        </button>
      ))}
    </div>
  );
};

export default CardNavigation;
