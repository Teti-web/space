import React from "react";
import Description from "../components/Description";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="relative h-screen w-full overflow-x-hidden bg-imgHome bg-cover bg-center bg-no-repeat text-white">
      <div className="lg:mx-auto relative mt-[112px] grid items-center justify-items-center text-center  md:mt-[202px] lg:my-0 lg:mt-0 lg:h-full lg:max-w-[1200px] lg:grid-cols-2 lg:text-left">
        <Description
          title="SPACE"
          text="Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!"
          subtitle="SO, YOU WANT TO TRAVEL TO"
          visibleSubtitle={true}
          largeSubtitle={true}
        />
        <Link
          to="/destination"
          className="lg:hover:after:bg-opacity-10 relative flex h-[150px] w-[150px] items-center justify-center rounded-[50%] bg-white text-[20px] uppercase leading-[1.25px] tracking-[2px] text-dark transition delay-200 duration-1000 ease-in lg:h-[274px] lg:w-[274px] lg:text-[32px] lg:hover:after:absolute lg:hover:after:h-[450px] lg:hover:after:w-[450px] lg:hover:after:rounded-[50%] lg:hover:after:bg-white"
        >
          EXPLORE
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
