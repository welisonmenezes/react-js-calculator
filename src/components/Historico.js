import React, { useContext } from "react";
import { AppContext } from './../contexts/AppContext';

import "./Historico.css";

function Historico() {

    const {mHistorico} = useContext(AppContext);
    const historico = mHistorico[0];

    return (
        <div className="historico">{historico}</div>
    );
}

export default Historico;
