import React, { useContext } from "react";
import { AppContext } from './../contexts/AppContext';
import "./Display.css";

function Display() {
    const {mResultado} = useContext(AppContext);
    const [resultado] = mResultado;

    return (
        <div className="display">{resultado}</div>
    );
}

export default Display;
