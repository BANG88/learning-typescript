"use strict";
var React = require("react");
var ReactDOM = require("react-dom");
var Hello_1 = require("./components/Hello");
var About_1 = require("./components/About");
ReactDOM.render(React.createElement("div", null, React.createElement(Hello_1.default, {compiler: "TypeScript", framework: "React"}), React.createElement(About_1.default, {description: "I am a front-end developer"})), document.getElementById("example"));
//# sourceMappingURL=index.js.map