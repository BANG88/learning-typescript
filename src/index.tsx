import * as React from "react";
import * as ReactDOM from "react-dom";

import Hello from "./components/Hello";
import About from "./components/About";

ReactDOM.render(
    <div>
        <Hello compiler="TypeScript" framework="React" />
        <About description="I am a front-end developer"/>
    </div>,
    document.getElementById("example")
);