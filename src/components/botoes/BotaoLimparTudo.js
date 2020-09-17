import React, { useContext } from "react";
import { AppContext } from './../../contexts/AppContext';
import "./Botao.css";

function BotaoLimparTudo() {

    const {mDigito, mNumeros, mOperadores, mResultado} = useContext(AppContext);
    const setDigito = mDigito[1];
    const setNumeros = mNumeros[1];
    const setResultado = mResultado[1];
    const setOperadores = mOperadores[1];

    function limparTudo() {
        setNumeros([]);
        setOperadores([]);
        setDigito('0');
        setResultado('0');
    }
    
    return (
        <div className="botao cinza" onClick={limparTudo}>C</div>
    );
}

export default BotaoLimparTudo;
