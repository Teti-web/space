"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Slider_1 = require("../components/Slider");
var Title_1 = require("../components/Title");
var douglas_hurley_png_1 = require("../assets/douglas-hurley.png");
var mark_shuttleworth_png_1 = require("../assets/mark-shuttleworth.png");
var viktor_glover_png_1 = require("../assets/viktor-glover.png");
var anousheh_ansari_png_1 = require("../assets/anousheh-ansari.png");
var CrewPage = function () {
    var _a = react_1.useState(1), visibleSlide = _a[0], setVisibleSlide = _a[1];
    var handleSlideVisibility = function (idSlide) {
        setVisibleSlide(idSlide);
    };
    return (react_1["default"].createElement("section", { className: "bg-imgCrew relative h-screen w-full overflow-x-hidden bg-cover bg-center bg-no-repeat pt-[88px] text-white md:pt-[136px] lg:pt-[150px]" },
        react_1["default"].createElement(Title_1["default"], { title: "Meet your crew", span: "02" }),
        react_1["default"].createElement(Slider_1["default"], { sliders: [
                {
                    id: 1,
                    img: douglas_hurley_png_1["default"],
                    title: "Douglas Hurley",
                    subtitle: "Commander",
                    descriptions: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
                },
                {
                    id: 2,
                    img: mark_shuttleworth_png_1["default"],
                    title: "MARK SHUTTLEWORTH",
                    subtitle: "Mission Specialist ",
                    descriptions: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
                },
                {
                    id: 3,
                    img: viktor_glover_png_1["default"],
                    title: "Victor Glover",
                    subtitle: "PILOT",
                    descriptions: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. "
                },
                {
                    id: 4,
                    img: anousheh_ansari_png_1["default"],
                    title: "Anousheh Ansari",
                    subtitle: "Flight Engineer",
                    descriptions: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.  "
                },
            ], visibleSlider: visibleSlide, handleSlideVisibility: handleSlideVisibility, navigationNumber: false })));
};
exports["default"] = CrewPage;
