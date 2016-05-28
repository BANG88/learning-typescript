"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
/**
 *
 * Hello
 *
 * ```js
 *
 * <Hello compiler="TypeScript" framework="React" />
 *
 * ```
 */
var Hello = (function (_super) {
    __extends(Hello, _super);
    function Hello() {
        _super.apply(this, arguments);
    }
    Hello.prototype.render = function () {
        return React.createElement("h1", null, "Hello from ", this.props.compiler, " and ", this.props.framework, "!");
    };
    return Hello;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Hello;
//# sourceMappingURL=Hello.js.map