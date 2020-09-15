import React from "react";
import "./Botao.css";

function BotaoNumero(props) {
    return (
        <div className="botao">{props.numero}</div>
    );
}

export default BotaoNumero;
