import React from "react";

type propsTitle = {
  title: string;
  span: string;
};

const Title = ({ title, span }: propsTitle) => {
  return (
    <h1 className="m-auto flex justify-center gap-[18px] text-[16px] font-normal uppercase tracking-[2.7px] md:justify-start md:pl-[39px] md:text-[20px] lg:gap-[28px] lg:pl-[166px] lg:text-[28px]">
      <span className="opacity-25">{span}</span>
      {title}
    </h1>
  );
};

export default Title;
