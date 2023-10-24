import React, { useState, useEffect } from "react";

type sliderProps = {
  sliders: {
    id: number;
    img: string;
    imgDesktop?: string;
    title: string;
    descriptions: string;
    subtitle: string;
  }[];
  visibleSlider: number;
  navigationNumber: boolean;
  handleSlideVisibility: (idSlide: number) => void;
};

const Slider = ({
  sliders,
  navigationNumber,
  visibleSlider,
  handleSlideVisibility,
}: sliderProps) => {
  const [userActive, setUserActive] = useState(false);
  const advanceToNextSlide = () => {
    const currentSlideIndex = sliders.findIndex(
      (slider) => slider.id === visibleSlider,
    );
    const nextSlideIndex = (currentSlideIndex + 1) % sliders.length;

    handleSlideVisibility(sliders[nextSlideIndex].id);
  };

  // Listen for user interaction and reset the auto-advance timer
  const handleUserInteraction = () => {
    setUserActive(true);
    clearTimeout(autoAdvanceTimer);
    startAutoAdvanceTimer();
  };

  // Start the auto-advance timer
  const startAutoAdvanceTimer = () => {
    const autoAdvanceTimer = setTimeout(() => {
      advanceToNextSlide();
      setUserActive(false);
    }, 10000);
  };

  let autoAdvanceTimer: NodeJS.Timeout;
  startAutoAdvanceTimer();

  useEffect(() => {
    window.addEventListener("mousemove", handleUserInteraction);
    window.addEventListener("touchstart", handleUserInteraction);
    return () => {
      window.removeEventListener("mousemove", handleUserInteraction);
      window.removeEventListener("touchstart", handleUserInteraction);
    };
  }, []);
  return (
    <>
      {navigationNumber ? (
        <div className="relative lg:pl-[325px] lg:pt-[26px]">
          {sliders.map((slider) => (
            <div
              className={`grid items-center justify-items-center lg:grid-cols-2 lg:justify-items-start ${
                slider.id === visibleSlider ? "" : "hidden"
              }`}
              key={slider.id}
            >
              <div className="animate-fadeIn order-last pt-[100px] text-center lg:order-none lg:text-left">
                <span className="font-primary text-[14px] font-normal tracking-[2.362px] text-blue md:text-[16px] md:tracking-[2.7px]">
                  {slider.subtitle}
                </span>
                <h2 className="pt-[9px] font-secondary text-[24px] font-normal uppercase text-white md:text-[40px] lg:text-[56px]">
                  {slider.title}
                </h2>
                <p className="leading-25 md:leading-28 lg:leading-32 font-primary text-[15px] font-normal text-blue md:text-[16px] lg:max-w-[444px] lg:text-[18px]">
                  {slider.descriptions}
                </p>
              </div>
              <picture>
                <source
                  className="animate-fadeInRight h-full max-h-[170px] w-full pt-[32px] md:max-h-[310px] md:pt-[60px] lg:max-h-[527px] lg:pt-0"
                  media="(min-width: 976px)"
                  srcSet={slider.imgDesktop}
                />
                <img
                  className="animate-fadeInRight h-full max-h-[170px] w-[100vw] pt-[32px] md:max-h-[310px] md:pt-[60px] lg:max-h-[527px] lg:w-full lg:pt-0 "
                  src={slider.img}
                  alt={slider.title}
                />
              </picture>
            </div>
          ))}

          <div
            className="translate-x-center lg:translate-y-center absolute left-1/2 top-[200px] z-10 flex  items-center justify-center gap-2 md:top-[329px]  md:gap-4 lg:left-[167.23px]
        lg:top-1/2 lg:flex-col"
          >
            {sliders.map((slider) => (
              <button
                key={slider.id}
                className={`flex h-[40px] w-[40px] items-center justify-center rounded-full border-[1px] border-solid border-white transition-all duration-500 ease-in-out md:h-[60px] md:w-[60px] md:text-[24px] md:tracking-[1.5px] lg:h-[80px] lg:w-[80px] lg:text-[32px] lg:hover:border-[2px] lg:tracking-[2px]${
                  visibleSlider === slider.id
                    ? " bg-white text-dark"
                    : " bg-transparent text-white"
                }`}
                onClick={() => handleSlideVisibility(slider.id)}
              >
                {slider.id}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="h-full w-full lg:absolute lg:bottom-0 lg:h-auto lg:pl-[165.23px]">
          {sliders.map((slider) => (
            <div
              className={`grid items-center justify-items-center lg:grid-cols-2 lg:justify-items-start ${
                slider.id === visibleSlider ? "" : "hidden"
              }`}
              key={slider.id}
            >
              <div className="animate-fadeIn md:mx-[88px]lg:mx-0 border-t-solid border-t-grey order-last mx-[24px] border-t-[1px] pt-[75px] md:order-none md:border-t-0 md:pt-[60px] lg:pt-0">
                <span className="opacity-50 block text-center font-secondary text-[16px] font-normal uppercase text-white md:text-[24px] lg:text-left lg:text-[32px] ">
                  {slider.subtitle}
                </span>
                <h2 className="pt-[8px] text-center font-secondary font-normal uppercase text-white md:text-[40px] lg:pt-[10px] lg:text-left lg:text-[56px]">
                  {slider.title}
                </h2>
                <p className="leading-25 md:leading-28 lg:leading-32 pt-[16px] text-center font-primary text-[15px] font-normal text-blue md:text-[16px] lg:max-w-[444px] lg:pt-[27px] lg:text-left lg:text-[18px]">
                  {slider.descriptions}
                </p>
              </div>
              <img
                className="animate-fadeInRight h-full max-h-[250px] w-auto object-fill pt-[32px] md:max-h-[532px] md:pt-[90px] lg:max-h-[630px] lg:pt-0"
                src={slider.img}
                alt={slider.title}
              />
            </div>
          ))}
          <div
            className="translate-x-center absolute left-1/2 top-[395px] z-10 flex items-center justify-center md:top-[425px] lg:bottom-[94px] lg:left-[167.23px]
        lg:top-[auto] lg:translate-x-0"
          >
            {sliders.map((slider) => (
              <button
                key={slider.id}
                className={`mx-2 h-[10px] w-[10px] rounded-full bg-white md:h-[15px] md:w-[15px] ${
                  visibleSlider === slider.id
                    ? "bg-opacity-100"
                    : "bg-opacity-20"
                }`}
                onClick={() => handleSlideVisibility(slider.id)}
              ></button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Slider;
