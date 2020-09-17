import React, { useContext } from "react";
import { AppContext } from './../../contexts/AppContext';
import { operadoresValidos } from './../../utils/Utils';
import "./Botao.css";

function BotaoNumero(props) {

    const {mDigito, mNumeros, mOperadores, mResultado} = useContext(AppContext);
    const [digito, setDigito] = mDigito;
    const setNumeros = mNumeros[1];
    const setOperadores = mOperadores[1];
    const setResultado = mResultado[1];

    function digitarNumero(event) {
        let tempDigito = digito;

        // permitir apenas um ponto (.) no dígito atual
        if (tempDigito.includes('.') && event.target.innerHTML === '.') return;
    
        if (tempDigito === '=') {
            // se o resultado já foi requerido, limpar tudo
            setNumeros([]);
            setOperadores([]);
            tempDigito = event.target.innerHTML;
            
        } else {
            // se dígito atual é operador, seta-o como zero
            if (operadoresValidos.includes(tempDigito)) {
                tempDigito = '0';
            }
    
            // atualiza o dígito atual, se zero, atribui, senão, concatena
            if (tempDigito === '0') {
                tempDigito = event.target.innerHTML;
            } else {
                tempDigito += event.target.innerHTML;
            }
        }

        if(event.target.innerHTML === '.' && (tempDigito === '0' || tempDigito === '.')) {
            tempDigito = '0' + event.target.innerHTML;
        }  

        setTimeout(() => {
            setDigito(tempDigito);
            setResultado(tempDigito);
        }, 1);
    }

    return (
        <div className="botao" onClick={digitarNumero}>{props.numero}</div>
    );
}

export default BotaoNumero;
