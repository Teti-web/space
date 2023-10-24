import React from "react";

type descriptionProps = {
  title: string;
  subtitle?: string;
  text: string;
  visibleSubtitle: boolean;
  opacitySubtitle?: boolean;
  largeSubtitle?: boolean;
  smallTitle?: boolean;
  middleTitle?: boolean;
};

const Description = ({
  visibleSubtitle,
  title,
  text,
  subtitle,
  smallTitle,
  middleTitle,
  opacitySubtitle,
  largeSubtitle,
}: descriptionProps) => {
  return (
    <div className="grid gap-[24px]">
      <p
        className={`font-primary text-[14px] font-normal uppercase tracking-[2.4px] text-blue md:text-[16px] md:tracking-[2.7px] ${
          opacitySubtitle &&
          "opacity-50 font-white text-[16px] md:text-[24px] lg:text-[32px]"
        } ${
          largeSubtitle &&
          "text-[16px] md:text-[20px] md:tracking-[3.375px] lg:text-[28px]"
        }`}
      >
        {visibleSubtitle && subtitle}
      </p>
      <h1
        className={`leading-snug lg:leading-none font-secondary text-[80px] font-normal uppercase md:text-[150px] md:leading-[150px] ${
          smallTitle && "text-[24px] md:text-[40px] lg:text-[56px]"
        } ${middleTitle && "text-[56px] md:text-[80px] lg:text-[100px]"}`}
      >
        {title}
      </h1>
      <p className="leading-25 md:leading-28 lg:leading-32 font-normal text-blue md:font-primary md:text-[16px] lg:text-[18px]">
        {text}
      </p>
    </div>
  );
};

export default Description;
