"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Slider = function (_a) {
    var sliders = _a.sliders, navigationNumber = _a.navigationNumber, visibleSlider = _a.visibleSlider, handleSlideVisibility = _a.handleSlideVisibility;
    var _b = react_1.useState(false), userActive = _b[0], setUserActive = _b[1];
    var advanceToNextSlide = function () {
        var currentSlideIndex = sliders.findIndex(function (slider) { return slider.id === visibleSlider; });
        var nextSlideIndex = (currentSlideIndex + 1) % sliders.length;
        handleSlideVisibility(sliders[nextSlideIndex].id);
    };
    // Listen for user interaction and reset the auto-advance timer
    var handleUserInteraction = function () {
        setUserActive(true);
        clearTimeout(autoAdvanceTimer);
        startAutoAdvanceTimer();
    };
    // Start the auto-advance timer
    var startAutoAdvanceTimer = function () {
        var autoAdvanceTimer = setTimeout(function () {
            advanceToNextSlide();
            setUserActive(false);
        }, 10000);
    };
    var autoAdvanceTimer;
    startAutoAdvanceTimer();
    react_1.useEffect(function () {
        window.addEventListener("mousemove", handleUserInteraction);
        window.addEventListener("touchstart", handleUserInteraction);
        return function () {
            window.removeEventListener("mousemove", handleUserInteraction);
            window.removeEventListener("touchstart", handleUserInteraction);
        };
    }, []);
    return (react_1["default"].createElement(react_1["default"].Fragment, null, navigationNumber ? (react_1["default"].createElement("div", { className: "relative lg:pl-[325px] lg:pt-[26px]" },
        sliders.map(function (slider) { return (react_1["default"].createElement("div", { className: "grid items-center justify-items-center lg:grid-cols-2 lg:justify-items-start " + (slider.id === visibleSlider ? "" : "hidden"), key: slider.id },
            react_1["default"].createElement("div", { className: "animate-fadeIn order-last pt-[100px] text-center lg:order-none lg:text-left" },
                react_1["default"].createElement("span", { className: "font-primary text-[14px] font-normal tracking-[2.362px] text-blue md:text-[16px] md:tracking-[2.7px]" }, slider.subtitle),
                react_1["default"].createElement("h2", { className: "pt-[9px] font-secondary text-[24px] font-normal uppercase text-white md:text-[40px] lg:text-[56px]" }, slider.title),
                react_1["default"].createElement("p", { className: "leading-25 md:leading-28 lg:leading-32 font-primary text-[15px] font-normal text-blue md:text-[16px] lg:max-w-[444px] lg:text-[18px]" }, slider.descriptions)),
            react_1["default"].createElement("picture", null,
                react_1["default"].createElement("source", { className: "animate-fadeInRight h-full max-h-[170px] w-full pt-[32px] md:max-h-[310px] md:pt-[60px] lg:max-h-[527px] lg:pt-0", media: "(min-width: 976px)", srcSet: slider.imgDesktop }),
                react_1["default"].createElement("img", { className: "animate-fadeInRight h-full max-h-[170px] w-[100vw] pt-[32px] md:max-h-[310px] md:pt-[60px] lg:max-h-[527px] lg:w-full lg:pt-0 ", src: slider.img, alt: slider.title })))); }),
        react_1["default"].createElement("div", { className: "translate-x-center lg:translate-y-center absolute left-1/2 top-[200px] z-10 flex  items-center justify-center gap-2 md:top-[329px]  md:gap-4 lg:left-[167.23px]\r\n        lg:top-1/2 lg:flex-col" }, sliders.map(function (slider) { return (react_1["default"].createElement("button", { key: slider.id, className: "flex h-[40px] w-[40px] items-center justify-center rounded-full border-[1px] border-solid border-white transition-all duration-500 ease-in-out md:h-[60px] md:w-[60px] md:text-[24px] md:tracking-[1.5px] lg:h-[80px] lg:w-[80px] lg:text-[32px] lg:hover:border-[2px] lg:tracking-[2px]" + (visibleSlider === slider.id
                ? " bg-white text-dark"
                : " bg-transparent text-white"), onClick: function () { return handleSlideVisibility(slider.id); } }, slider.id)); })))) : (react_1["default"].createElement("div", { className: "h-full w-full lg:absolute lg:bottom-0 lg:h-auto lg:pl-[165.23px]" },
        sliders.map(function (slider) { return (react_1["default"].createElement("div", { className: "grid items-center justify-items-center lg:grid-cols-2 lg:justify-items-start " + (slider.id === visibleSlider ? "" : "hidden"), key: slider.id },
            react_1["default"].createElement("div", { className: "animate-fadeIn md:mx-[88px]lg:mx-0 border-t-solid border-t-grey order-last mx-[24px] border-t-[1px] pt-[75px] md:order-none md:border-t-0 md:pt-[60px] lg:pt-0" },
                react_1["default"].createElement("span", { className: "opacity-50 block text-center font-secondary text-[16px] font-normal uppercase text-white md:text-[24px] lg:text-left lg:text-[32px] " }, slider.subtitle),
                react_1["default"].createElement("h2", { className: "pt-[8px] text-center font-secondary font-normal uppercase text-white md:text-[40px] lg:pt-[10px] lg:text-left lg:text-[56px]" }, slider.title),
                react_1["default"].createElement("p", { className: "leading-25 md:leading-28 lg:leading-32 pt-[16px] text-center font-primary text-[15px] font-normal text-blue md:text-[16px] lg:max-w-[444px] lg:pt-[27px] lg:text-left lg:text-[18px]" }, slider.descriptions)),
            react_1["default"].createElement("img", { className: "animate-fadeInRight h-full max-h-[250px] w-auto object-fill pt-[32px] md:max-h-[532px] md:pt-[90px] lg:max-h-[630px] lg:pt-0", src: slider.img, alt: slider.title }))); }),
        react_1["default"].createElement("div", { className: "translate-x-center absolute left-1/2 top-[395px] z-10 flex items-center justify-center md:top-[425px] lg:bottom-[94px] lg:left-[167.23px]\r\n        lg:top-[auto] lg:translate-x-0" }, sliders.map(function (slider) { return (react_1["default"].createElement("button", { key: slider.id, className: "mx-2 h-[10px] w-[10px] rounded-full bg-white md:h-[15px] md:w-[15px] " + (visibleSlider === slider.id
                ? "bg-opacity-100"
                : "bg-opacity-20"), onClick: function () { return handleSlideVisibility(slider.id); } })); }))))));
};
exports["default"] = Slider;
