"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Card_1 = require("../components/Card");
var Title_1 = require("../components/Title");
var moon_png_1 = require("../assets/moon.png");
var mars_png_1 = require("../assets/mars.png");
var europa_png_1 = require("../assets/europa.png");
var titan_png_1 = require("../assets/titan.png");
var DestinationPage = function () {
    var _a = react_1.useState("MOON"), visibleCard = _a[0], setVisibleCard = _a[1];
    var handleCardVisibility = function (cardName) {
        setVisibleCard(cardName);
        console.log(cardName);
    };
    return (react_1["default"].createElement("div", { className: "bg-imgDest relative h-screen w-full overflow-x-hidden bg-cover bg-center bg-no-repeat pt-[88px] text-white md:pt-[136px] lg:pt-[175px]" },
        react_1["default"].createElement(Title_1["default"], { title: "Pick your destination", span: "01" }),
        react_1["default"].createElement(Card_1["default"], { id: "1", title: "MOON", description: "See our planet as you\u2019ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you\u2019re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.", img: moon_png_1["default"], detail1: "384,400 km", detail2: "3 days", visibleCard: visibleCard === "MOON", handleCardVisibility: handleCardVisibility }),
        react_1["default"].createElement(Card_1["default"], { id: "2", title: "MARS", description: "Don\u2019t forget to pack your hiking boots. You\u2019ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It\u2019s two and a half times the size of Everest!", img: mars_png_1["default"], detail1: "225 MIL. km", detail2: "9 months", visibleCard: visibleCard === "MARS", handleCardVisibility: handleCardVisibility }),
        react_1["default"].createElement(Card_1["default"], { id: "3", title: "EUROPA", description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover\u2019s dream. With an icy surface, it\u2019s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.", img: europa_png_1["default"], detail1: "628 MIL. km", detail2: "3 years", visibleCard: visibleCard === "EUROPA", handleCardVisibility: handleCardVisibility }),
        react_1["default"].createElement(Card_1["default"], { id: "4", title: "TITAN", description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.", img: titan_png_1["default"], detail1: "1.6 BIL. km", detail2: "7 years", visibleCard: visibleCard === "TITAN", handleCardVisibility: handleCardVisibility })));
};
exports["default"] = DestinationPage;
