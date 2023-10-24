"use strict";
exports.__esModule = true;
var react_1 = require("react");
var CardNavigation_1 = require("./CardNavigation");
var Card = function (_a) {
    var title = _a.title, description = _a.description, detail1 = _a.detail1, detail2 = _a.detail2, img = _a.img, visibleCard = _a.visibleCard, handleCardVisibility = _a.handleCardVisibility;
    return (react_1["default"].createElement("section", { className: "pt-[10px] md:pt-[15px] lg:pt-[64px] " + (visibleCard ? "" : "hidden") },
        react_1["default"].createElement("div", { className: "grid items-center px-[24px] md:px-[97px] lg:grid-cols-[60%_auto] lg:pl-0 lg:pr-[163px]" },
            react_1["default"].createElement("img", { className: "w-hull animate-fadeInLeft h-auto max-w-[170px] justify-self-center md:max-w-[300px] lg:max-w-[534px] ", src: img, alt: title, loading: "lazy" }),
            react_1["default"].createElement("div", null,
                react_1["default"].createElement(CardNavigation_1["default"], { names: [
                        { id: "1", title: "MOON" },
                        { id: "2", title: "MARS" },
                        { id: "3", title: "EUROPA" },
                        { id: "4", title: "TITAN" },
                    ], visibleCard: title, handleCardVisibility: handleCardVisibility }),
                react_1["default"].createElement("div", { className: "border-grey animate-fadeIn border-b border-solid pb-[32px]" },
                    react_1["default"].createElement("h2", { className: "text-center font-secondary text-[56px] uppercase text-white md:text-[80px] lg:text-left lg:text-[100px]" }, title),
                    react_1["default"].createElement("p", { className: "leading-25 md:leading-28 lg:leading-32 text-center font-primary text-[15px] text-blue md:text-[16px] lg:text-left lg:text-[18px]" }, description)),
                react_1["default"].createElement("div", { className: "animate-fadeIn flex flex-col gap-[32px] md:flex-row  md:justify-start lg:gap-[65px] lg:pt-[28px]" },
                    react_1["default"].createElement("p", { className: "text-center font-secondary text-[28px] font-normal uppercase text-white lg:text-left " },
                        react_1["default"].createElement("span", { className: "block font-primary text-[14px] tracking-[2.362px] text-blue" }, "AVG. DISTANCE"),
                        detail1),
                    react_1["default"].createElement("p", { className: "text-center font-secondary text-[28px] font-normal uppercase text-white lg:text-left " },
                        react_1["default"].createElement("span", { className: "block font-primary text-[14px] tracking-[2.362px] text-blue" }, "Est. travel time"),
                        detail2))))));
};
exports["default"] = Card;
