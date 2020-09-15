import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Calculadora from "./Calculadora";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
    <React.StrictMode>
        <Calculadora />
    </React.StrictMode>,
    document.getElementById("root")
);

serviceWorker.unregister();
