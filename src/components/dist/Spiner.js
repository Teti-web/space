"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Spiner = function () {
    return (react_1["default"].createElement("div", { className: "loading-container" },
        react_1["default"].createElement("div", { className: "loading" },
            react_1["default"].createElement("div", { className: "arc" }),
            react_1["default"].createElement("div", { className: "arc" }),
            react_1["default"].createElement("div", { className: "arc" }))));
};
exports["default"] = Spiner;
