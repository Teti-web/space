"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var HomePage_1 = require("./pages/HomePage");
var DestinationPage_1 = require("./pages/DestinationPage");
var CrewPage_1 = require("./pages/CrewPage");
var TechnologyPage_1 = require("./pages/TechnologyPage");
var Navigation_1 = require("./components/Navigation");
function App() {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(Navigation_1["default"], null),
        react_1["default"].createElement(react_router_dom_1.Routes, null,
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/", element: react_1["default"].createElement(HomePage_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/destination", element: react_1["default"].createElement(DestinationPage_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/crew", element: react_1["default"].createElement(CrewPage_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/technology", element: react_1["default"].createElement(TechnologyPage_1["default"], null) }))));
}
exports["default"] = App;
