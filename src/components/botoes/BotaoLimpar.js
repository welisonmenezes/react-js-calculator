import React, { useContext } from "react";
import { AppContext } from './../../contexts/AppContext';
import "./Botao.css";

function BotaoLimpar() {

    const {mDigito, mNumeros, mOperadores, mResultado} = useContext(AppContext);
    const [digito, setDigito] = mDigito;
    const setNumeros = mNumeros[1];
    const setResultado = mResultado[1];
    const setOperadores = mOperadores[1];


    function limparDigitoAtual() {
        
        // se resultado já foi requerido, limpar tudo
        if (digito === '=') {
            setNumeros([]);
            setOperadores([]);
            setDigito('0');
            setResultado('0');
        } else {
            setDigito('0');
            setResultado('0');
        }
    }

    return (
        <div className="botao cinza" onClick={limparDigitoAtual}>CE</div>
    );
}

export default BotaoLimpar;
