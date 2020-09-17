import React, { useContext } from "react";
import { AppContext } from './../../contexts/AppContext';
import { naoNumeros } from './../../utils/Utils';
import "./Botao.css";

function BotaoTrocarSinal() {

    const {mDigito, mNumeros, mOperadores, mResultado} = useContext(AppContext);
    const setNumeros = mNumeros[1];
    const setResultado = mResultado[1];
    const setOperadores = mOperadores[1];
    const [digito, setDigito] = mDigito;

    function trocarSinal() {
        let tempDigito = digito;

        // se resultado já foi requerido, limpar tudo
        if (tempDigito === '=') {
            setNumeros([]);
            setOperadores([]);
            setDigito('0');
            setResultado('0');
        }
    
        // se dígito atual é numero válido e maior que zero
        if (! naoNumeros.includes(tempDigito) && parseFloat(tempDigito) * 1 !== 0) {
            const primeiroCaracter = tempDigito.charAt(0);
    
            if (primeiroCaracter === '-') {
                tempDigito = tempDigito.substring(1);
    
            } else {
                tempDigito = '-' + tempDigito;
            }
    
            //atualizarDisplay(tempDigito);
            setDigito(tempDigito);
            setResultado(tempDigito);
        }
    }

    return (
        <div className="botao" onClick={trocarSinal}>+/-</div>
    );
}

export default BotaoTrocarSinal;
