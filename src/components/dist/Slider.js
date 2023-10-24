"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Slider = function (_a) {
    var sliders = _a.sliders, navigationNumber = _a.navigationNumber, visibleSlider = _a.visibleSlider, handleSlideVisibility = _a.handleSlideVisibility;
    return (react_1["default"].createElement(react_1["default"].Fragment, null, navigationNumber ? (react_1["default"].createElement("div", { className: "relative lg:pl-[325px] lg:pt-[26px]" },
        sliders.map(function (slider) { return (react_1["default"].createElement("div", { className: "grid items-center justify-items-center lg:grid-cols-2 lg:justify-items-start " + (slider.id === visibleSlider ? "" : "hidden"), key: slider.id },
            react_1["default"].createElement("div", { className: "order-last animate-fadeIn pt-[100px] text-center lg:order-none lg:text-left" },
                react_1["default"].createElement("span", { className: "font-primary text-[14px] font-normal tracking-[2.362px] text-blue md:text-[16px] md:tracking-[2.7px]" }, slider.subtitle),
                react_1["default"].createElement("h2", { className: "pt-[9px] font-secondary text-[24px] font-normal uppercase text-white md:text-[40px] lg:text-[56px]" }, slider.title),
                react_1["default"].createElement("p", { className: "font-primary text-[15px] font-normal leading-25 text-blue md:text-[16px] md:leading-28 lg:max-w-[444px] lg:text-[18px] lg:leading-32" }, slider.descriptions)),
            react_1["default"].createElement("picture", null,
                react_1["default"].createElement("source", { className: "h-full max-h-[170px] w-full animate-fadeInRight pt-[32px] md:max-h-[310px] md:pt-[60px] lg:max-h-[527px] lg:pt-0", media: "(min-width: 976px)", srcSet: slider.imgDesktop }),
                react_1["default"].createElement("img", { className: "h-full max-h-[170px] w-[100vw] animate-fadeInRight pt-[32px] md:max-h-[310px] md:pt-[60px] lg:max-h-[527px] lg:w-full lg:pt-0 ", src: slider.img, alt: slider.title })))); }),
        react_1["default"].createElement("div", { className: "absolute left-1/2 top-[200px] z-10 flex translate-x-center items-center  justify-center gap-2 md:top-[329px] md:gap-4  lg:left-[167.23px] lg:top-1/2\r\n        lg:translate-y-center lg:flex-col" }, sliders.map(function (slider) { return (react_1["default"].createElement("button", { key: slider.id, className: "flex h-[40px] w-[40px] items-center justify-center rounded-full border-[1px] border-solid border-white transition-all duration-500 ease-in-out md:h-[60px] md:w-[60px] md:text-[24px] md:tracking-[1.5px] lg:h-[80px] lg:w-[80px] lg:text-[32px] lg:hover:border-[2px] lg:tracking-[2px]" + (visibleSlider === slider.id
                ? " bg-white text-dark"
                : " bg-transparent text-white"), onClick: function () { return handleSlideVisibility(slider.id); } }, slider.id)); })))) : (react_1["default"].createElement("div", { className: "h-full w-full lg:absolute lg:bottom-0 lg:h-auto lg:pl-[165.23px]" },
        sliders.map(function (slider) { return (react_1["default"].createElement("div", { className: "grid items-center justify-items-center lg:grid-cols-2 lg:justify-items-start " + (slider.id === visibleSlider ? "" : "hidden"), key: slider.id },
            react_1["default"].createElement("div", { className: "md:mx-[88px]lg:mx-0 border-t-solid order-last mx-[24px] animate-fadeIn border-t-[1px] border-t-grey pt-[75px] md:order-none md:border-t-0 md:pt-[60px] lg:pt-0" },
                react_1["default"].createElement("span", { className: "block text-center font-secondary text-[16px] font-normal uppercase text-white opacity-50 md:text-[24px] lg:text-left lg:text-[32px] " }, slider.subtitle),
                react_1["default"].createElement("h2", { className: "pt-[8px] text-center font-secondary font-normal uppercase text-white md:text-[40px] lg:pt-[10px] lg:text-left lg:text-[56px]" }, slider.title),
                react_1["default"].createElement("p", { className: "pt-[16px] text-center font-primary text-[15px] font-normal leading-25 text-blue md:text-[16px] md:leading-28 lg:max-w-[444px] lg:pt-[27px] lg:text-left lg:text-[18px] lg:leading-32" }, slider.descriptions)),
            react_1["default"].createElement("img", { className: "h-full max-h-[250px] w-auto animate-fadeInRight object-fill pt-[32px] md:max-h-[532px] md:pt-[90px] lg:max-h-[630px] lg:pt-0", src: slider.img, alt: slider.title }))); }),
        react_1["default"].createElement("div", { className: "absolute left-1/2 top-[395px] z-10 flex translate-x-center items-center justify-center md:top-[425px] lg:bottom-[94px] lg:left-[167.23px]\r\n        lg:top-[auto] lg:translate-x-0" }, sliders.map(function (slider) { return (react_1["default"].createElement("button", { key: slider.id, className: "mx-2 h-[10px] w-[10px] rounded-full bg-white md:h-[15px] md:w-[15px] " + (visibleSlider === slider.id
                ? "bg-opacity-100"
                : "bg-opacity-20"), onClick: function () { return handleSlideVisibility(slider.id); } })); }))))));
};
exports["default"] = Slider;
