import React from "react";
import "./Calculadora.css";
import Display from "./components/Display";
import Historico from "./components/Historico";
import Botoes from "./components/botoes/Botoes";

function Calculadora() {
    return (
        <div className="calculadora">
            <Historico />
            <Display />
            <Botoes />
        </div>
    );
}

export default Calculadora;
