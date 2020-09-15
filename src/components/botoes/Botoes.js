import React from "react";
import "./Botoes.css";
import BotaoLimpar from "./BotaoLimpar";
import BotaoLimparTudo from "./BotaoLimparTudo";
import BotaoVoltar from "./BotaoVoltar";
import BotaoOperador from "./BotaoOperador";
import BotaoNumero from "./BotaoNumero";
import BotaoTrocarSinal from "./BotaoTrocarSinal";
import BotaoResultado from "./BotaoResultado";

function Botoes() {
    return (
        <div className="botoes">
            <div>
                <BotaoLimpar />
                <BotaoLimparTudo />
                <BotaoVoltar />
                <BotaoOperador operador="&divide;" />
            </div>
            <div>
                <BotaoNumero numero="7" />
                <BotaoNumero numero="8" />
                <BotaoNumero numero="9" />
                <BotaoOperador operador="&times;" />
            </div>
            <div>
                <BotaoNumero numero="4" />
                <BotaoNumero numero="5" />
                <BotaoNumero numero="6" />
                <BotaoOperador operador="-" />
            </div>
            <div>
                <BotaoNumero numero="1" />
                <BotaoNumero numero="2" />
                <BotaoNumero numero="3" />
                <BotaoOperador operador="+" />
            </div>
            <div>
                <BotaoTrocarSinal />
                <BotaoNumero numero="0" />
                <BotaoNumero numero="." />
                <BotaoResultado />
            </div>
        </div>
    );
}

export default Botoes;
