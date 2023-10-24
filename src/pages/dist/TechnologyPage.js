"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Slider_1 = require("../components/Slider");
var Title_1 = require("../components/Title");
var launch_jpg_1 = require("../assets/launch.jpg");
var launch_desc_jpg_1 = require("../assets/launch-desc.jpg");
var Spaceport_jpg_1 = require("../assets/Spaceport.jpg");
var spaceport_desc_jpg_1 = require("../assets/spaceport-desc.jpg");
var capsule_jpg_1 = require("../assets/capsule.jpg");
var capsule_desk_jpg_1 = require("../assets/capsule-desk.jpg");
var TechnologyPage = function () {
    var _a = react_1.useState(1), visibleSlide = _a[0], setVisibleSlide = _a[1];
    var handleSlideVisibility = function (idSlide) {
        setVisibleSlide(idSlide);
    };
    return (react_1["default"].createElement("section", { className: "bg-imgTech relative h-screen w-full overflow-x-hidden bg-cover bg-center bg-no-repeat pt-[88px] text-white md:pt-[136px] lg:pt-[150px]" },
        react_1["default"].createElement(Title_1["default"], { title: "SPACE LAUNCH 101", span: "03" }),
        react_1["default"].createElement(Slider_1["default"], { sliders: [
                {
                    id: 1,
                    img: launch_jpg_1["default"],
                    imgDesktop: launch_desc_jpg_1["default"],
                    title: "LAUNCH VEHICLE",
                    subtitle: "THE TERMINOLOGY…",
                    descriptions: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
                },
                {
                    id: 2,
                    img: Spaceport_jpg_1["default"],
                    imgDesktop: spaceport_desc_jpg_1["default"],
                    title: "SPACEPORT",
                    subtitle: "THE TERMINOLOGY…",
                    descriptions: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
                },
                {
                    id: 3,
                    img: capsule_jpg_1["default"],
                    imgDesktop: capsule_desk_jpg_1["default"],
                    title: "SPACE CAPSULE",
                    subtitle: "THE TERMINOLOGY…",
                    descriptions: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
                },
            ], visibleSlider: visibleSlide, handleSlideVisibility: handleSlideVisibility, navigationNumber: true })));
};
exports["default"] = TechnologyPage;
