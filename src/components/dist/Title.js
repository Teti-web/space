"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Title = function (_a) {
    var title = _a.title, span = _a.span;
    return (react_1["default"].createElement("h1", { className: "m-auto flex justify-center gap-[18px] text-[16px] font-normal uppercase tracking-[2.7px] md:justify-start md:pl-[39px] md:text-[20px] lg:gap-[28px] lg:pl-[166px] lg:text-[28px]" },
        react_1["default"].createElement("span", { className: "opacity-25" }, span),
        title));
};
exports["default"] = Title;
