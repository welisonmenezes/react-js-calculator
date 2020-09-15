import React from "react";
import "./Botao.css";

function BotaoOperador(props) {
    return (
        <div className="botao cinza">{props.operador}</div>
    );
}

export default BotaoOperador;
